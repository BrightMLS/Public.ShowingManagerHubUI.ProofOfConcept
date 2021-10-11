import { Grid, Button, Typography } from '@material-ui/core'
import {
  CustomTextField,
  CustomLabel,
  ResponseHub,
  CustomSelect,
} from 'components'
import useStyles from './register-application-form-style'
import { REGISTER_APP_TYPES } from 'constant'

interface IProps {
  formik: Record<string, any>
  response?: any | null
  statusType?: boolean
}
const RegisteForm = ({ formik, response, statusType }: IProps) => {
  const classes = useStyles()
  return (
    <form onSubmit={formik.handleSubmit} className={classes.form}>
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12} container justifyContent="flex-start" spacing={2}>
          <Grid item md={12} sm={12} className={classes.displayFlex}>
            <CustomLabel name={'Organization ID'} isRequired={true} />
            <CustomTextField formik={formik} name="organizationId" />
          </Grid>
        </Grid>
        <Grid item xs={12} container justifyContent="flex-start" spacing={2}>
          <Grid item md={6} sm={6} className={classes.displayFlex}>
            <CustomLabel name={'Application Name'} isRequired={true} />
            <CustomTextField formik={formik} name="applicationName" />
          </Grid>
          <Grid item md={6} sm={6} className={classes.displayFlex}>
            <CustomLabel name={'Application Type'} isRequired={true} />
            <CustomSelect
              formik={formik}
              options={REGISTER_APP_TYPES}
              name="applicationType"
            />
          </Grid>
        </Grid>
        <Grid item xs={12} container justifyContent="flex-start" spacing={2}>
          <Grid item md={6} sm={6} className={classes.displayFlex}>
            <CustomLabel name={'Contact First Name'} isRequired={true} />
            <CustomTextField formik={formik} name="contactFirstName" />
          </Grid>
          <Grid item md={6} sm={6} className={classes.displayFlex}>
            <CustomLabel name={'Contact Last Name'} isRequired={true} />
            <CustomTextField formik={formik} name="contactLastName" />
          </Grid>
        </Grid>
        <Grid item xs={12} container justifyContent="flex-start" spacing={2}>
          <Grid item md={6} sm={6} className={classes.displayFlex}>
            <CustomLabel name={'Contact Phone Number'} isRequired={true} />
            <CustomTextField formik={formik} name="contactPhone" />
          </Grid>
          <Grid item md={6} sm={6} className={classes.displayFlex}>
            <CustomLabel name={'Contact Email'} isRequired={true} />
            <CustomTextField formik={formik} name="contactEmail" />
          </Grid>
        </Grid>
        <Grid item xs={12} container justifyContent="flex-start" spacing={2}>
          <Grid item md={12} sm={12} className={classes.displayFlex}>
            <CustomLabel name={'Callback URL'} isRequired={true} />
            <CustomTextField
              formik={formik}
              name="callBackUrl"
              longTextField={true}
            />
          </Grid>
        </Grid>
        <Grid
          container
          item
          xs={12}
          md={10}
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

export default RegisteForm
