import { useState } from 'react'
import { Grid } from '@material-ui/core'
import { Loader, HeaderTitle } from 'components'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { errorMsg } from 'utils'
import { useSnackbar } from 'notistack'
import axios from 'axios'
import { appConfig } from 'config'
import { MODULE_HEADER_TITLE, API_ERROR_MESSAGE } from 'constant'

import useStyles from './respond-to-request-style'
import FindRequestFrom from './components/find-request-form'
import PostRequestForm from './components/post-request-form'

const RespondToRequest = () => {
  const classes = useStyles()
  const [showLoader, setShowLoader] = useState<boolean>(false)
  const [isResponse, setIsResponse] = useState<boolean>(false)
  const [isResponsePostForm, setIsResponsePostForm] = useState<boolean>(false)
  const [responseData, setResponseData] = useState<any>('')
  const [responseDataPostForm, setResponseDataPostForm] = useState<any>('')
  const { enqueueSnackbar } = useSnackbar()
  const formik = useFormik({
    initialValues: {
      requestId: '',
    },
    onSubmit: async (values: Record<string, any>) => {
      if (values) {
        const { requestId } = values
        setShowLoader(true)
        try {
          const response = await axios.get(
            `${appConfig.apiEndpoint}/app/request/${requestId}`,
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
          console.error(error)
          setResponseData({ error })
          enqueueSnackbar(API_ERROR_MESSAGE, { variant: 'error' })
          setShowLoader(false)
        }
      }
    },

    validationSchema: Yup.object().shape({
      requestId: Yup.string()
        .required(errorMsg.requiredField('Request Id'))
        .trim(),
    }),
  })
  const postFormik = useFormik({
    initialValues: {
      requestStatus: '',
    },
    onSubmit: async (values: Record<string, any>) => {
      const { requestId } = responseData
      if (values && requestId) {
        const { requestStatus } = values
        setShowLoader(true)
        try {
          let requestObj = { ...responseData }
          requestObj.requestStatus = requestStatus
          const response = await axios.put(
            `${appConfig.apiEndpoint}/app/request/update/${requestId}`,
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
            setResponseDataPostForm(result)
            setIsResponsePostForm(true)
          }
          setShowLoader(false)
        } catch (error: any) {
          console.error(error)
          setResponseDataPostForm({ error })
          enqueueSnackbar(API_ERROR_MESSAGE, { variant: 'error' })
          setShowLoader(false)
        }
      } else {
        enqueueSnackbar('Request Id is required', { variant: 'warning' })
      }
    },

    validationSchema: Yup.object().shape({
      requestStatus: Yup.string()
        .required(errorMsg.requiredField('Request status'))
        .trim(),
    }),
  })
  return (
    <>
      <Loader visible={showLoader} />
      <Grid container className={classes.root}>
        <HeaderTitle title={MODULE_HEADER_TITLE.respond_to_request} />
        <FindRequestFrom
          formik={formik}
          response={responseData}
          statusType={isResponse}
        />
        <PostRequestForm
          formik={postFormik}
          response={responseDataPostForm}
          statusType={isResponsePostForm}
        />
      </Grid>
    </>
  )
}

export default RespondToRequest
