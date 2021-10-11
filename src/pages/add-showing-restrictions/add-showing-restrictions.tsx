import { useState } from 'react'
import { Grid } from '@material-ui/core'
import { useFormik } from 'formik'
import { useSnackbar } from 'notistack'
import axios from 'axios'
import { MODULE_HEADER_TITLE, API_ERROR_MESSAGE } from 'constant'

import useStyles from './add-showing-restrictions-style'
import { HeaderTitle, Loader } from 'components'
import { AddShowingRestrictionsForm } from './components'
import { appConfig } from 'config'

const AddShowingRestrictions = () => {
  const [showLoader, setShowLoader] = useState<boolean>(false)
  const [isResponse, setIsResponse] = useState<boolean>(false)
  const [responseData, setResponseData] = useState<any>('')
  const { enqueueSnackbar } = useSnackbar()

  const formik = useFormik({
    initialValues: {
      showListingID: '',
      startDate: '',
      endDate: '',
      beginDate: '',
      noEndDate: false,
      numberOfWeeks: 0,
      startTime: '',
      endTime: '',
      weekDay: false,
      addRestriction: false,
      addReoccuring: false,
      sun: false,
      mon: false,
      tue: false,
      wed: false,
      thu: false,
      fri: false,
      sat: false,
    },

    onSubmit: async (values: Record<string, any>) => {
      setShowLoader(true)
      let responseObj = {}
      const {
        showListingID,
        startDate,
        endDate,
        beginDate,
        noEndDate,
        numberOfWeeks,
        startTime,
        endTime,
      } = values

      const restrictionRequestObj = {
        restrictionId: null,
        startDateTime: startDate ? new Date(startDate).toISOString() : null,
        endDateTime: endDate ? new Date(endDate).toISOString() : null,
      }

      const weekDaysObj: any = {
        sun: 'Sunday',
        mon: 'Monday',
        tue: 'Tuesday',
        wed: 'Wednesday',
        thu: 'Thursday',
        fri: 'Friday',
        sat: 'Saturday',
      }

      let reoccuringRequestObj: Array<any> = []

      for (let key of Object.keys(weekDaysObj)) {
        if (values[key]) {
          reoccuringRequestObj.push({
            recoccuringId: null,
            dayOfWeek: weekDaysObj[key],
            numberOfWeeks: numberOfWeeks || !noEndDate ? numberOfWeeks : 0,
            beginDate: beginDate ? new Date(beginDate).toISOString() : null,
            startDatetime: startTime ? new Date(startTime).toISOString() : null,
            endDatetime: endTime ? new Date(endTime).toISOString() : null,
          })
        }
      }

      try {
        if (values.addRestriction) {
          const response = await axios.post(
            `${appConfig.apiEndpoint}/app/listing/create_restriction/${showListingID}`,
            restrictionRequestObj,
            {
              headers: {
                authRequired: true,
              },
            },
          )

          const { data, status } = response

          if (status === 200) {
            responseObj = {
              'Restriction Response': data?.results?.length
                ? data.results[0]
                : data,
            }
            setResponseData(responseObj)
            setShowLoader(false)
            setIsResponse(true)
          }
        }
        if (values.addReoccuring) {
          const response = await axios.post(
            `${appConfig.apiEndpoint}/app/listing/create_reoccurring_restriction/${showListingID}`,
            reoccuringRequestObj,
            {
              headers: {
                authRequired: true,
              },
            },
          )

          const { data, status } = response
          if (status === 200) {
            responseObj = {
              ...responseObj,
              'Reoccuring Response': data?.results?.length
                ? data.results[0]
                : data,
            }
            setResponseData(responseObj)
            setShowLoader(false)
            setIsResponse(true)
          }
        }
      } catch (error: any) {
        setResponseData(error)
        enqueueSnackbar(API_ERROR_MESSAGE, { variant: 'error' })
        setShowLoader(false)
      }
    },

    validate: (values) => {
      let errors = {}
      if (!values.showListingID) {
        errors = { ...errors, showListingID: 'Show Listing Id is Required' }
      }
      if (values.addRestriction) {
        if (!values.startDate) {
          errors = { ...errors, startDate: 'Start Date/Time is Required' }
        } else {
          if (values.startDate < new Date().toISOString()) {
            errors = { ...errors, startDate: 'Enter future date' }
          }
        }
        if (!values.endDate) {
          errors = { ...errors, endDate: 'End Date/Time is Required' }
        } else {
          if (
            values.endDate < new Date().toISOString() ||
            values.endDate < values.startDate
          ) {
            errors = {
              ...errors,
              endDate: 'End date/time should be after start date/time',
            }
          }
        }
      }
      if (values.addReoccuring) {
        if (!values.startTime) {
          errors = { ...errors, startTime: 'Start Time is Required' }
        } else {
          if (values.startTime < new Date().toISOString()) {
            errors = { ...errors, startTime: 'Enter future date' }
          }
        }
        if (!values.endTime) {
          errors = { ...errors, endTime: 'End Time is Required' }
        } else {
          if (
            values.endTime < new Date().toISOString() ||
            values.endTime < values.startTime
          ) {
            errors = {
              ...errors,
              endTime: 'End date/time should be after start date/time',
            }
          }
        }
        if (!values.beginDate) {
          errors = { ...errors, beginDate: 'Begin Date is Required' }
        }
        if (!values.noEndDate) {
          if (!values.numberOfWeeks) {
            errors = { ...errors, numberOfWeeks: 'Number of Weeks is Required' }
          } else {
            if (values.numberOfWeeks <= 0) {
              errors = { ...errors, numberOfWeeks: 'Invalid Number Of Weeks' }
            }
          }
        }
        if (
          !values.sun &&
          !values.mon &&
          !values.tue &&
          !values.wed &&
          !values.thu &&
          !values.fri &&
          !values.sat
        ) {
          errors = { ...errors, weekDay: 'Atleast a day is required' }
        }
      }
      return errors
    },
  })

  const classes = useStyles()
  return (
    <>
      <Loader visible={showLoader} />
      <Grid container className={classes.root}>
        <Grid className={classes.header}>
          <HeaderTitle title={MODULE_HEADER_TITLE.add_showing_restrictions} />
        </Grid>

        <AddShowingRestrictionsForm
          formik={formik}
          response={responseData}
          statusType={isResponse}
        />
      </Grid>
    </>
  )
}

export default AddShowingRestrictions
