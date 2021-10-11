import { Grid, Button, Typography } from '@material-ui/core'
import {
  CustomTextField,
  CustomLabel,
  ResponseHub,
  CustomSelect,
} from 'components'
import { REGISTER_ORG_TYPES } from 'constant'
import useStyles from './register-form-style'

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
          <Grid item md={6} sm={6} className={classes.innerGrid}>
            <CustomLabel name={'Organization Name'} isRequired={true} />
            <CustomTextField formik={formik} name="organizationName" />
          </Grid>
          <Grid item md={6} sm={6} className={classes.displayFlex}>
            <CustomLabel name={'Organization Type'} isRequired={true} />
            <CustomSelect
              formik={formik}
              options={REGISTER_ORG_TYPES}
              name="organizationType"
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
            <CustomTextField formik={formik} name="contactPhoneNumber" />
          </Grid>
          <Grid item md={6} sm={6} className={classes.displayFlex}>
            <CustomLabel name={'Contact Email'} isRequired={true} />
            <CustomTextField formik={formik} name="contactEmail" />
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
