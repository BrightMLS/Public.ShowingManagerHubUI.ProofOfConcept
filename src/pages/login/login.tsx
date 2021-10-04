import { useState } from 'react'
import { Grid } from '@material-ui/core'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { appConfig } from 'config'
import {
  MODULE_HEADER_TITLE,
  API_ERROR_MESSAGE,
  API_URL_NOT_PRESENT,
} from 'constant'
import { HeaderTitle, Loader } from 'components'
import { errorMsg, isEnvHasUrl } from 'utils'
import useStyles from './login-style'
import { useSnackbar } from 'notistack'
import LoginForm from './components/login-form'
import { useHistory } from 'react-router-dom'

const Login = () => {
  const [showLoader, setShowLoader] = useState<boolean>(false)
  const [isResponse, setIsResponse] = useState<boolean>(false)
  const [responseData, setResponseData] = useState<any>({})
  const { enqueueSnackbar } = useSnackbar()
  const classes = useStyles()
  let history = useHistory()
  const formik = useFormik({
    initialValues: {
      appKey: '',
      applicationID: '',
    },
    onSubmit: async (values: Record<string, any>) => {
      if (isEnvHasUrl()) {
        if (values) {
          setShowLoader(true)
          const { appKey, applicationID } = values
          try {
            const apiToken = await axios.get(
              `${appConfig.apiEndpoint}/token?apiKey=${appKey}`,
            )

            const token = apiToken?.data?.token
            const expiration = apiToken?.data?.expiration

            const response = await axios.get(
              `${appConfig.apiEndpoint}/app/application/get/${applicationID}`,
              { headers: { Authorization: `Bearer ${token}` } },
            )
            const { data, status } = response
            if (status === 200) {
              if (data.isSuccessful) {
                const result = {
                  'Login Token: ': token,
                  'Expiration: ': expiration,
                }
                const applicationName = data?.results[0].applicationName
                const organizationId = data?.results[0].organizationId
                const userDetails = {
                  token: token,
                  expiration: expiration,
                  appId: applicationID,
                  orgId: organizationId,
                  applicationName: applicationName,
                }
                localStorage.setItem('userDetails', JSON.stringify(userDetails))
                setResponseData(result)
                setIsResponse(true)
                history.push('/register-property')
              }
            }
            setShowLoader(false)
          } catch (error: any) {
            console.error(error)
            setResponseData({ error })
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
      appKey: Yup.string().required(errorMsg.requiredField('App Key')).trim(),
      applicationID: Yup.string()
        .required(errorMsg.requiredField('Application ID'))
        .trim(),
    }),
  })

  return (
    <>
      <Loader visible={showLoader} />
      <Grid container className={classes.root}>
        <HeaderTitle title={MODULE_HEADER_TITLE.login} />
        <LoginForm
          formik={formik}
          response={responseData}
          statusType={isResponse}
        />
      </Grid>
    </>
  )
}

export default Login
