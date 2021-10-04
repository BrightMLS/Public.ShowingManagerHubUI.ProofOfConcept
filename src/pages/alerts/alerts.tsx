import { useState, useEffect } from 'react'
import {
  ResponseHub,
  CustomLabel,
  CustomTextField,
  CustomSelect,
} from 'components'
import { useFormik } from 'formik'
import { useSnackbar } from 'notistack'
import { HeaderTitle, Loader } from 'components'
import axios from 'axios'
import { appConfig } from 'config'
import {
  MODULE_HEADER_TITLE,
  API_ERROR_MESSAGE,
  APPOINTMENT_REQUESTS_COLUMNS,
  ALERT_EVENT_TYPES,
  EVENTS_MAPPING,
} from 'constant'
import useStyles from './alerts-style'
import { localDate } from 'utils'
import { Grid, Button, Typography } from '@material-ui/core'

const Alerts = (props: any) => {
  const { componentType }: any = props
  const [showLoader, setShowLoader] = useState<boolean>(false)
  const { enqueueSnackbar } = useSnackbar()
  let [rowsData, setRowsData] = useState<any>([[]])
  const classes = useStyles()
  useEffect(() => {
    setRowsData([])
  }, [props.componentType])

  const formik = useFormik({
    initialValues: {
      maxRows: 50,
      eventType: '',
      columns: APPOINTMENT_REQUESTS_COLUMNS,
      data: [],
    },
    onSubmit: async (values: Record<string, any>) => {
      if (values) {
        setShowLoader(true)
        const { maxRows, eventType } = values
        let webhookEvent = eventType
        try {
          const userDetails = localStorage.getItem('userDetails')
          const applicationId = userDetails ? JSON.parse(userDetails).appId : ''
          const organizationId = userDetails
            ? JSON.parse(userDetails).orgId
            : ''
          if (!eventType && componentType !== 'all_alerts') {
            webhookEvent = EVENTS_MAPPING[componentType]
          }
          const extraQueryyParameter = webhookEvent
            ? `maxRows=${maxRows}&eventType=${webhookEvent}`
            : `maxRows=${maxRows}`

          const response = await axios.get(
            `${appConfig.webhookApiEndpoint}/fetch-webhook?organizationId=${organizationId}&applicationId=${applicationId}&${extraQueryyParameter}`,
          )
          const { data } = response
          let result = data?.data?.length ? data.data : []
          let tableData: any = []
          for (const key in result) {
            const value = result[key]
            let indexValue: any = [
              localDate(value.insertedDateTime),
              value.organizationId,
              value.applicationId,
              value.subscriptionId,
              value.webhookEvent,
              value.attempt,
              value.data,
            ]

            tableData.push(indexValue)
          }
          setRowsData(tableData)
          setShowLoader(false)
        } catch (error: any) {
          console.error(error)
          enqueueSnackbar(API_ERROR_MESSAGE, { variant: 'error' })
          setShowLoader(false)
        }
      }
    },
  })

  return (
    <>
      <Loader visible={showLoader} />
      <Grid container className={classes.root}>
        <HeaderTitle title={MODULE_HEADER_TITLE[componentType]} />
        <form onSubmit={formik.handleSubmit} className={classes.formContainer}>
          <Grid container className={classes.form} spacing={2}>
            <Grid
              item
              xs={12}
              container
              justifyContent="flex-start"
              spacing={2}
            >
              <Grid item lg={6} md={12} className={classes.innerGrid}>
                <CustomLabel name={'Max Rows'} isRequired={false} />
                <CustomTextField type="number" formik={formik} name="maxRows" />
              </Grid>
              {componentType === 'all_alerts' ? (
                <Grid item lg={6} md={12} className={classes.innerGrid}>
                  <CustomLabel name={'Event Type'} />
                  <CustomSelect
                    formik={formik}
                    options={ALERT_EVENT_TYPES}
                    name="eventType"
                  />
                </Grid>
              ) : (
                <Grid item lg={3} md={12} className={classes.sideButtonWrapper}>
                  <Button
                    type="submit"
                    className={classes.refreshButton}
                    variant="contained"
                  >
                    <Typography className={classes.textRefresh}>
                      {'Refresh'}
                    </Typography>
                  </Button>
                </Grid>
              )}
              {componentType === 'all_alerts' && (
                <Grid
                  container
                  item
                  xs={12}
                  md={12}
                  justifyContent="center"
                  className={classes.buttonWrapper}
                >
                  <Button
                    type="submit"
                    className={classes.refreshButton}
                    variant="contained"
                  >
                    <Typography className={classes.textRefresh}>
                      {'Refresh'}
                    </Typography>
                  </Button>
                </Grid>
              )}
            </Grid>
            <Grid container item xs={12} md={12}>
              <ResponseHub
                title="Response:"
                columns={APPOINTMENT_REQUESTS_COLUMNS}
                rowsData={rowsData}
                rootStyle={classes.rootStyle}
              />
            </Grid>
          </Grid>
        </form>
      </Grid>
    </>
  )
}
export default Alerts
