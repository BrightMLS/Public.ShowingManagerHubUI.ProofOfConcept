import { Grid, Button, Typography, Divider } from '@material-ui/core'
import {
  CustomTextField,
  CustomLabel,
  ResponseHub,
  CustomSelect,
  CustomCheckbox,
  CustomTitle,
} from 'components'
import useStyles from './request-appointment-form-style'
import { SHOWING_METHOD_TYPES, APPOINTMENT_TYPES } from 'constant'

interface IProps {
  formik: Record<string, any>
  response?: any | null
  statusType?: boolean
}
const RequestAppointmentForm = ({ formik, response, statusType }: IProps) => {
  const classes = useStyles()
  return (
    <form onSubmit={formik.handleSubmit} className={classes.form}>
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12} container justifyContent="flex-start" spacing={2}>
          <Grid item lg={6} md={12} className={classes.displayFlex}>
            <CustomLabel name={'Show Listing ID'} isRequired={true} />
            <CustomTextField formik={formik} name="showListingId" />
          </Grid>
        </Grid>
        <Grid item xs={12} container justifyContent="flex-start" spacing={2}>
          <Grid item lg={6} md={12} className={classes.displayFlex}>
            <CustomLabel name={'Start Time'} isRequired={true} />
            <CustomTextField
              id="date"
              type="datetime-local"
              formik={formik}
              name="startDatetime"
            />
          </Grid>
          <Grid item lg={6} md={12} className={classes.displayFlex}>
            <CustomLabel name={'End Time'} isRequired={true} />
            <CustomTextField
              id="date"
              type="datetime-local"
              formik={formik}
              name="endDatetime"
            />
          </Grid>
        </Grid>
        <Grid item xs={12} container justifyContent="flex-start" spacing={2}>
          <Grid item lg={6} md={12} className={classes.displayFlex}>
            <CustomLabel name={'Appointment Type'} isRequired={true} />
            <CustomSelect
              formik={formik}
              options={APPOINTMENT_TYPES}
              name="appointmentType"
            />
          </Grid>
          <Grid item lg={6} md={12} className={classes.displayFlex}>
            <CustomLabel name={'Appointment Method'} isRequired={true} />
            <CustomSelect
              formik={formik}
              options={SHOWING_METHOD_TYPES}
              name="appointmentMethod"
            />
          </Grid>
        </Grid>
        <Divider className={classes.divider} />
        <Grid item xs={12} container>
          <CustomTitle title={'Buying Agent Information'}></CustomTitle>
        </Grid>
        <Grid item xs={12} container justifyContent="flex-start" spacing={2}>
          <Grid item lg={6} md={12} className={classes.displayFlex}>
            <CustomLabel name={'Agent ID'} isRequired={true} />
            <CustomTextField formik={formik} name="buyingAgentID" />
          </Grid>
          <Grid item lg={6} md={12} className={classes.displayFlex}>
            <CustomLabel name={'Full Name'} isRequired={true} />
            <CustomTextField formik={formik} name="buyingAgentName" />
          </Grid>
        </Grid>
        <Grid item xs={12} container justifyContent="flex-start" spacing={2}>
          <Grid item lg={6} md={12} className={classes.displayFlex}>
            <CustomLabel name={'License Number'} isRequired={true} />
            <CustomTextField formik={formik} name="buyingAgentLicenseNumber" />
          </Grid>
          <Grid item lg={6} md={12} className={classes.displayFlex}>
            <CustomLabel name={'License State'} isRequired={true} />
            <CustomTextField formik={formik} name="buyingAgentLicenseState" />
          </Grid>
        </Grid>
        <Grid item xs={12} container justifyContent="flex-start" spacing={2}>
          <Grid item lg={6} md={12} className={classes.displayFlex}>
            <CustomLabel name={'State Affirmation'} />
            <CustomCheckbox
              formik={formik}
              name="buyingAgentStateLicenseAffirmation"
            />
          </Grid>
          <Grid item lg={6} md={12} className={classes.displayFlex}>
            <CustomLabel name={'MLSID'} isRequired={true} />
            <CustomTextField formik={formik} name="buyingAgentMlsId" />
          </Grid>
        </Grid>
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
            className={classes.submitButton}
            variant="contained"
          >
            <Typography className={classes.textSubmit}>{'Submit'}</Typography>
          </Button>
        </Grid>
        <Grid container item xs={12} md={12}>
          <ResponseHub isResponse={statusType} responseObject={response} />
        </Grid>
      </Grid>
    </form>
  )
}

export default RequestAppointmentForm
