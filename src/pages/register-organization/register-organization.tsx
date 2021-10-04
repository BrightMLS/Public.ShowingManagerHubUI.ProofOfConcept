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

import useStyles from './register-organization-style'
import { HeaderTitle, Loader } from 'components'
import RegisteForm from './components/register-form'
import { errorMsg, phoneRegExp, isEnvHasUrl } from 'utils'
import { appConfig } from 'config'

const RegisterOrganization = () => {
  const [showLoader, setShowLoader] = useState<boolean>(false)
  const [isResponse, setIsResponse] = useState<boolean>(false)
  const [responseData, setResponseData] = useState<string>('')
  const { enqueueSnackbar } = useSnackbar()
  const formik = useFormik({
    initialValues: {
      organizationName: '',
      contactFirstName: '',
      contactLastName: '',
      contactPhoneNumber: '',
      contactEmail: '',
      organizationType: '',
    },
    onSubmit: async (values: Record<string, any>) => {
      if (isEnvHasUrl(process.env.REACT_APP_API_ENDPOINT)) {
        if (values) {
          setShowLoader(true)
          const {
            organizationName,
            contactEmail,
            contactPhoneNumber,
            contactLastName,
            contactFirstName,
            organizationType,
          } = values
          const requestObj = {
            organizationType: organizationType,
            organizationName: organizationName,
            contactEmail: contactEmail,
            contactPhone: contactPhoneNumber,
            contactFirstName: contactFirstName,
            contactLastName: contactLastName,
          }
          try {
            const response = await axios.post(
              `${appConfig.apiEndpoint}/app/organization/registration`,
              requestObj,
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
      organizationName: Yup.string()
        .required(errorMsg.requiredField('Organization Name'))
        .trim(),
      contactFirstName: Yup.string()
        .required(errorMsg.requiredField('Contact First Name'))
        .trim(),
      contactLastName: Yup.string()
        .required(errorMsg.requiredField('Contact Last Name'))
        .trim(),
      contactEmail: Yup.string()
        .required(errorMsg.requiredField('Contact Email'))
        .email('Enter valid email address!')
        .trim(),
      contactPhoneNumber: Yup.string()
        .required(errorMsg.requiredField('Contact Phone Number'))
        .matches(phoneRegExp, 'Phone number is not valid'),
      organizationType: Yup.string()
        .required(errorMsg.requiredField('Organization Type'))
        .trim(),
    }),
  })
  const classes = useStyles()
  return (
    <>
      <Loader visible={showLoader} />
      <Grid container className={classes.root}>
        <HeaderTitle title={MODULE_HEADER_TITLE.register_organization} />
        <RegisteForm
          formik={formik}
          response={responseData}
          statusType={isResponse}
        />
      </Grid>
    </>
  )
}

export default RegisterOrganization
