import { useState } from 'react'
import { Grid } from '@material-ui/core'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useSnackbar } from 'notistack'
import axios from 'axios'
import { MODULE_HEADER_TITLE, API_ERROR_MESSAGE } from 'constant'

import useStyles from './cancel-appointment-style'
import { HeaderTitle, Loader } from 'components'
import CancelAppointmentForm from './component/cancel-appointment-form'
import { errorMsg } from 'utils'
import { appConfig } from 'config'

const CancelAppointment = () => {
  const [showLoader, setShowLoader] = useState<boolean>(false)
  const [isResponse, setIsResponse] = useState<boolean>(false)

  const [responseData, setResponseData] = useState<any>('')
  const { enqueueSnackbar } = useSnackbar()

  const formik = useFormik({
    initialValues: {
      appointmentId: '',
      initiator: '',
      cancelReason: '',
      cancellationComments: '',
    },
    onSubmit: async (values: Record<string, any>, { setErrors }) => {
      setShowLoader(true)
      const { appointmentId, initiator, cancelReason, cancellationComments } =
        values
      const requestObj = {
        initiator: initiator,
        cancelReason: cancelReason,
        cancelComments: cancellationComments,
      }
      try {
        const response = await axios.put(
          `${appConfig.apiEndpoint}/app/appointment/cancel/${appointmentId}`,
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
      } catch (error: any) {
        setResponseData({ error })
        enqueueSnackbar(API_ERROR_MESSAGE, { variant: 'error' })
        setShowLoader(false)
      }
    },

    validationSchema: Yup.object().shape({
      appointmentId: Yup.string()
        .required(errorMsg.requiredField('Appointment Id'))
        .trim(),
      cancelReason: Yup.string()
        .required(errorMsg.requiredField('Cancel Reason'))
        .trim(),
    }),
  })

  const classes = useStyles()
  return (
    <>
      <Loader visible={showLoader} />
      <Grid container className={classes.root}>
        <HeaderTitle title={MODULE_HEADER_TITLE.cancel_appointment} />
        <CancelAppointmentForm
          formik={formik}
          response={responseData}
          statusType={isResponse}
        />
      </Grid>
    </>
  )
}

export default CancelAppointment
