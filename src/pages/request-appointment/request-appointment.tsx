import { useState } from 'react'
import { Grid } from '@material-ui/core'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useSnackbar } from 'notistack'
import axios from 'axios'
import { MODULE_HEADER_TITLE, API_ERROR_MESSAGE } from 'constant'

import useStyles from './request-appointment-style'
import { HeaderTitle, Loader } from 'components'
import RegisteForm from './components/request-appointment-form'
import { errorMsg } from 'utils'
import { appConfig } from 'config'

const RequestAppointment = () => {
  const [showLoader, setShowLoader] = useState<boolean>(false)
  const [isResponse, setIsResponse] = useState<boolean>(false)
  const [responseData, setResponseData] = useState<any>('')
  const { enqueueSnackbar } = useSnackbar()
  const formik = useFormik({
    initialValues: {
      showListingId: '',
      startDatetime: '',
      endDatetime: '',
      appointmentType: '',
      appointmentMethod: '',
      buyingAgentID: '',
      buyingAgentName: '',
      buyingAgentStateLicenseAffirmation: false,
      buyingAgentLicenseNumber: '',
      buyingAgentLicenseState: '',
      buyingAgentMlsId: '',
    },
    onSubmit: async (values: Record<string, any>) => {
      console.log('called>>>>>>>>')
      if (values) {
        setShowLoader(true)
        const {
          showListingId,
          startDatetime,
          endDatetime,
          appointmentType,
          appointmentMethod,
          buyingAgentID,
          buyingAgentName,
          buyingAgentStateLicenseAffirmation,
          buyingAgentLicenseNumber,
          buyingAgentLicenseState,
          buyingAgentMlsId,
        } = values
        const requestObj = {
          showListingId,
          startDatetime: startDatetime
            ? new Date(startDatetime).toISOString()
            : null,
          endDatetime: endDatetime ? new Date(endDatetime).toISOString() : null,
          appointmentType,
          appointmentMethod,
          buyingAgentID,
          buyingAgentName,
          buyingAgentStateLicenseAffirmation,
          buyingAgentLicenseNumber,
          buyingAgentLicenseState,
          buyingAgentMlsId,
        }

        try {
          const response = await axios.post(
            `${appConfig.apiEndpoint}/app/request`,
            requestObj,
            {
              headers: {
                authRequired: true,
              },
            },
          )
          const { data, status } = response
          if (status === 200) {
            let result = data?.results?.length ? data.results[0] : data
            setResponseData(result)
            setIsResponse(true)
          }
          setShowLoader(false)
        } catch (error) {
          console.error(error)
          setResponseData({ error })
          enqueueSnackbar(API_ERROR_MESSAGE, { variant: 'error' })
          setShowLoader(false)
        }
      }
    },
    validationSchema: Yup.object().shape({
      showListingId: Yup.string()
        .required(errorMsg.requiredField('Show Listing ID'))
        .trim(),
      startDatetime: Yup.date()
        .min(new Date(), 'Please enter future date')
        .required(errorMsg.requiredField('Start Time')),
      endDatetime: Yup.date()
        .required(errorMsg.requiredField('End Time'))
        .min(Yup.ref('startDatetime'), 'Should be greater than Start Time'),
      appointmentType: Yup.string()
        .required(errorMsg.requiredField('Appointment Type'))
        .trim(),
      appointmentMethod: Yup.string()
        .required(errorMsg.requiredField('Appointment Method'))
        .trim(),
      buyingAgentID: Yup.string()
        .required(errorMsg.requiredField('Agent ID'))
        .trim(),
      buyingAgentName: Yup.string()
        .required(errorMsg.requiredField('Full Name'))
        .trim(),
      buyingAgentLicenseNumber: Yup.string()
        .required(errorMsg.requiredField('License Number'))
        .trim(),
      buyingAgentLicenseState: Yup.string()
        .required(errorMsg.requiredField('License State'))
        .trim(),
      buyingAgentMlsId: Yup.string()
        .required(errorMsg.requiredField('MLSID'))
        .trim(),
    }),
  })

  const classes = useStyles()
  return (
    <>
      <Loader visible={showLoader} />
      <Grid container className={classes.root}>
        <HeaderTitle title={MODULE_HEADER_TITLE.request_appointment} />
        <RegisteForm
          formik={formik}
          response={responseData}
          statusType={isResponse}
        />
      </Grid>
    </>
  )
}

export default RequestAppointment
