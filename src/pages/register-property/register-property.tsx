import { useState } from 'react'
import { Grid } from '@material-ui/core'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useSnackbar } from 'notistack'
import axios from 'axios'
import { MODULE_HEADER_TITLE, API_ERROR_MESSAGE } from 'constant'

import useStyles from './register-property-style'
import { HeaderTitle, Loader } from 'components'
import RegisterPropertyForm from './components/register-property-form'
import { errorMsg } from 'utils'
import { appConfig } from 'config'

const RegisterProperty = () => {
  const [showLoader, setShowLoader] = useState<boolean>(false)
  const [isResponse, setIsResponse] = useState<boolean>(false)
  const [fullform, setFullForm] = useState<boolean>(false)
  const [isListingIDValid, setIsListingIDValid] = useState<boolean>(false)
  const [responseData, setResponseData] = useState<any>('')
  const { enqueueSnackbar } = useSnackbar()
  let commonSchema = {
    listingId: Yup.string()
      .required(errorMsg.requiredField('Showing Listing ID'))
      .trim(),
    universalPropertyId: Yup.string()
      .required(errorMsg.requiredField('UPI'))
      .trim(),
  }

  let otherSchema = {
    address1: Yup.string().required(errorMsg.requiredField('Address 1')).trim(),
    city: Yup.string().required(errorMsg.requiredField('City')).trim(),
    state: Yup.string().required(errorMsg.requiredField('State')).trim(),
    zipCode: Yup.string().required(errorMsg.requiredField('Zipcode')).trim(),
    listAgentMlsId: Yup.string()
      .required(errorMsg.requiredField('Listing Agent ID'))
      .trim(),
    listAgentName: Yup.string()
      .required(errorMsg.requiredField('Listing Agent Name'))
      .trim(),
    listAgentLicenseNumber: Yup.string()
      .required(errorMsg.requiredField('Agent License Number'))
      .trim(),
    listingAgentLicenseState: Yup.string()
      .required(errorMsg.requiredField('Agent License State'))
      .trim(),
    showingAllowed: Yup.string()
      .required(errorMsg.requiredField('Showings Allowed'))
      .trim(),
    requiredParticipants: Yup.string()
      .required(errorMsg.requiredField('Required Participants'))
      .trim(),
    showingInstructions: Yup.string().trim(),
    showingMethod: Yup.string()
      .required(errorMsg.requiredField('Showing Instructions'))
      .trim(),
    showableStartDate: Yup.date(),
    showableEndDate: Yup.date().min(
      Yup.ref('showableStartDate'),
      'Should be greater than Showable Start Date',
    ),
    confirmationType: Yup.string()
      .required(errorMsg.requiredField('Confirmation Type'))
      .trim(),
  }
  const formik = useFormik({
    initialValues: {
      listingId: '',
      universalPropertyId: '',
      listAgentMlsId: '',
      listAgentName: '',
      listAgentLicenseStateAffirmation: false,
      listAgentLicenseNumber: '',
      listingAgentLicenseState: '',
      showingAllowed: '',
      showableStartDate: '',
      showableEndDate: '',
      showingInstructions: '',
      requiredParticipants: '',
      showingMethod: '',
      confirmationType: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      zipCode: '',
    },
    onSubmit: async (values: Record<string, any>, { setErrors }) => {
      const userDetails = localStorage.getItem('userDetails')
      const applicationId = userDetails ? JSON.parse(userDetails).appId : ''
      if (values && isListingIDValid) {
        setShowLoader(true)
        const {
          listingId,
          universalPropertyId,
          listAgentMlsId,
          listAgentName,
          listAgentLicenseStateAffirmation,
          listAgentLicenseNumber,
          listingAgentLicenseState,
          showingAllowed,
          showableStartDate,
          showableEndDate,
          showingInstructions,
          requiredParticipants,
          showingMethod,
          confirmationType,
          address1,
          address2,
          city,
          state,
          zipCode,
        } = values
        const requestObj = {
          ...(applicationId ? { applicationId } : null),
          listingId,
          universalPropertyId,
          listAgentMlsId,
          listAgentName,
          listAgentLicenseStateAffirmation,
          listAgentLicenseNumber,
          listingAgentLicenseState,
          showingAllowed,
          ...(showableStartDate
            ? { showableStartDate: new Date(showableStartDate).toISOString() }
            : null),
          ...(showableEndDate
            ? { showableEndDate: new Date(showableEndDate).toISOString() }
            : null),
          showingInstructions,
          requiredParticipants,
          showingMethod,
          ...(confirmationType ? { confirmationType } : null),
          ...(address2 ? { address2 } : null),
          address1,
          city,
          state,
          zipCode,
        }
        try {
          const response = await axios.post(
            `${appConfig.apiEndpoint}/app/listing/configureshowablelisting`,
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
          console.error(error)
          setResponseData({ error })
          enqueueSnackbar(API_ERROR_MESSAGE, { variant: 'error' })
          setShowLoader(false)
        }
      } else {
        if (values) {
          setShowLoader(true)
          const { listingId } = values
          try {
            const response = await axios.get(
              `${appConfig.apiEndpoint}/app/listing/get/${listingId}`,
              {
                headers: {
                  authRequired: true,
                },
              },
            )
            const { data, status } = response
            if (status === 200) {
              let result = data?.results?.length ? data.results : []
              if (result.length) {
                setErrors({
                  listingId: `The property is already registered`,
                })
              } else {
                setFullForm(true)
                setIsListingIDValid(true)
              }
            }
            setShowLoader(false)
          } catch (error) {
            console.error(error)
            enqueueSnackbar(API_ERROR_MESSAGE, { variant: 'error' })
            setShowLoader(false)
          }
        }
      }
    },

    validationSchema: Yup.object().shape({
      ...commonSchema,
      ...(fullform ? otherSchema : null),
    }),
  })

  const classes = useStyles()
  return (
    <>
      <Loader visible={showLoader} />
      <Grid container className={classes.root}>
        <HeaderTitle title={MODULE_HEADER_TITLE.register_property} />
        <RegisterPropertyForm
          formik={formik}
          fullform={fullform}
          response={responseData}
          statusType={isResponse}
        />
      </Grid>
    </>
  )
}

export default RegisterProperty
