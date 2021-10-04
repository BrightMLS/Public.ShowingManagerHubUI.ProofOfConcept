import { useState } from 'react'
import { Grid } from '@material-ui/core'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useSnackbar } from 'notistack'
import axios from 'axios'
import {
  MODULE_HEADER_TITLE,
  API_ERROR_MESSAGE,
  API_URL_NOT_PRESENT,
} from 'constant'

import useStyles from './register-application-style'
import { HeaderTitle, Loader } from 'components'
import RegisteForm from './components/register-application-form'
import { errorMsg, phoneRegExp, isEnvHasUrl } from 'utils'
import { appConfig } from 'config'

const RegisterApplication = () => {
  const [showLoader, setShowLoader] = useState<boolean>(false)
  const [isResponse, setIsResponse] = useState<boolean>(false)
  const [responseData, setResponseData] = useState<string>('')
  const { enqueueSnackbar } = useSnackbar()
  const formik = useFormik({
    initialValues: {
      organizationId: '',
      applicationName: '',
      applicationType: '',
      contactFirstName: '',
      contactLastName: '',
      contactPhone: '',
      contactEmail: '',
      callBackUrl: '',
    },
    onSubmit: async (values: Record<string, any>) => {
      if (isEnvHasUrl()) {
        if (values) {
          setShowLoader(true)
          const {
            organizationId,
            applicationName,
            applicationType,
            contactEmail,
            contactPhone,
            contactLastName,
            contactFirstName,
            callBackUrl,
          } = values
          const requestObj = {
            organizationId,
            applicationName,
            applicationType,
            contactEmail,
            contactPhone,
            contactLastName,
            contactFirstName,
            callBackUrl,
          }

          try {
            const response = await axios.post(
              `${appConfig.apiEndpoint}/app/application/registration`,
              requestObj,
            )
            const { data, status } = response
            if (status === 200) {
              let result = data?.results?.length ? data.results[0] : data
              setResponseData(result)
              setIsResponse(true)
            }
            setShowLoader(false)
          } catch (error: any) {
            console.error(error)
            setResponseData(error)
            enqueueSnackbar(API_ERROR_MESSAGE, { variant: 'error' })
            setShowLoader(false)
          }
        }
      } else {
        enqueueSnackbar(API_URL_NOT_PRESENT, {
          variant: 'warning',
          preventDuplicate: true,
        })
      }
    },
    validationSchema: Yup.object().shape({
      organizationId: Yup.string()
        .required(errorMsg.requiredField('Organisation ID'))
        .trim(),
      applicationName: Yup.string()
        .required(errorMsg.requiredField('Application Name'))
        .trim(),
      applicationType: Yup.string()
        .required(errorMsg.requiredField('Application Type'))
        .trim(),
      contactFirstName: Yup.string()
        .required(errorMsg.requiredField('Contact First Name'))
        .trim(),
      contactLastName: Yup.string()
        .required(errorMsg.requiredField('Contact Last Name'))
        .trim(),
      callBackUrl: Yup.string()
        .required(errorMsg.requiredField('Callback URL'))
        .trim(),
      contactEmail: Yup.string()
        .required(errorMsg.requiredField('Contact Email'))
        .email('Enter valid email address!')
        .trim(),
      contactPhone: Yup.string()
        .required(errorMsg.requiredField('Contact Phone Number'))
        .matches(phoneRegExp, 'Phone number is not valid'),
    }),
  })

  const classes = useStyles()
  return (
    <>
      <Loader visible={showLoader} />
      <Grid container className={classes.root}>
        <HeaderTitle title={MODULE_HEADER_TITLE.register_application} />
        <RegisteForm
          formik={formik}
          response={responseData}
          statusType={isResponse}
        />
      </Grid>
    </>
  )
}

export default RegisterApplication
