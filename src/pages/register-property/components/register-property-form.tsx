import { Grid, Button, Typography, Divider } from '@material-ui/core'
import {
  CustomTextField,
  CustomLabel,
  ResponseHub,
  CustomSelect,
  CustomCheckbox,
} from 'components'
import useStyles from './register-property-form-style'
import {
  SHOWING_ALLOWED_TYPES,
  PROPERTY_CONFIRMATION_TYPES,
  SHOWING_METHOD_TYPES,
  REQUIRED_PARTICIPANTS_TYPES,
} from 'constant'

interface IProps {
  formik: Record<string, any>
  response?: any | null
  statusType?: boolean
  fullform?: boolean
}
const RegisterPropertyForm = ({
  formik,
  response,
  statusType,
  fullform,
}: IProps) => {
  const classes = useStyles()
  return (
    <form onSubmit={formik.handleSubmit} className={classes.form}>
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12} container justifyContent="flex-start" spacing={2}>
          <Grid item lg={4} md={12} className={classes.displayFlex}>
            <CustomLabel name={'UPI'} isRequired={true} />
            <CustomTextField formik={formik} name="universalPropertyId" />
          </Grid>
          <Grid item lg={4} md={12} className={classes.displayFlex}>
            <CustomLabel name={'Showing Listing ID'} isRequired={true} />
            <CustomTextField formik={formik} name="listingId" />
          </Grid>
        </Grid>
        {fullform && (
          <>
            <Divider className={classes.divider} />
            <Grid
              item
              xs={12}
              container
              justifyContent="flex-start"
              spacing={2}
            >
              <Grid item lg={4} md={12} className={classes.displayFlex}>
                <CustomLabel name={'Address 1'} isRequired={true} />
                <CustomTextField formik={formik} name="address1" />
              </Grid>
              <Grid item lg={4} md={12} className={classes.displayFlex}>
                <CustomLabel name={'City'} isRequired={true} />
                <CustomTextField formik={formik} name="city" />
              </Grid>
              <Grid item lg={4} md={12} className={classes.displayFlex}>
                <CustomLabel name={'State'} isRequired={true} />
                <CustomTextField formik={formik} name="state" />
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              container
              justifyContent="flex-start"
              spacing={2}
            >
              <Grid item lg={4} md={12} className={classes.displayFlex}>
                <CustomLabel name={'Address 2'} />
                <CustomTextField formik={formik} name="address2" />
              </Grid>
              <Grid item lg={4} md={12} className={classes.displayFlex}>
                <CustomLabel name={'ZipCode'} isRequired={true} />
                <CustomTextField formik={formik} name="zipCode" />
              </Grid>
            </Grid>
            <Divider className={classes.divider} />

            <Grid
              item
              xs={12}
              container
              justifyContent="flex-start"
              spacing={2}
            >
              <Grid item lg={4} md={12} className={classes.displayFlex}>
                <CustomLabel name={'Listing Agent ID'} isRequired={true} />
                <CustomTextField formik={formik} name="listAgentMlsId" />
              </Grid>
              <Grid item lg={4} md={12} className={classes.displayFlex}>
                <CustomLabel name={'Listing Agent Name'} isRequired={true} />
                <CustomTextField formik={formik} name="listAgentName" />
              </Grid>
              <Grid item lg={4} md={12} className={classes.displayFlex}>
                <CustomLabel name={'Agent License State'} isRequired={true} />
                <CustomTextField
                  formik={formik}
                  name="listingAgentLicenseState"
                />
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              container
              justifyContent="flex-start"
              spacing={2}
            >
              <Grid item lg={4} md={12} className={classes.displayFlex}>
                <CustomLabel name={'Agent License Number'} isRequired={true} />
                <CustomTextField
                  formik={formik}
                  name="listAgentLicenseNumber"
                />
              </Grid>
              <Grid item lg={4} md={12} className={classes.displayFlex}>
                <CustomLabel
                  name={'Listing Agent State Affirmation'}
                  isRequired={true}
                />
                <CustomCheckbox
                  formik={formik}
                  name="listAgentLicenseStateAffirmation"
                />
              </Grid>
            </Grid>
            <Divider className={classes.divider} />

            <Grid
              item
              xs={12}
              container
              justifyContent="flex-start"
              spacing={2}
            >
              <Grid item lg={4} md={12} className={classes.displayFlex}>
                <CustomLabel name={'Showings Allowed'} isRequired={true} />
                <CustomSelect
                  formik={formik}
                  options={SHOWING_ALLOWED_TYPES}
                  name="showingAllowed"
                  showKeyValue={true}
                />
              </Grid>
              <Grid item lg={4} md={12} className={classes.displayFlex}>
                <CustomLabel name={'Showable Start Date'} isRequired={false} />
                <CustomTextField
                  id="date"
                  type="date"
                  formik={formik}
                  name="showableStartDate"
                />
              </Grid>
              <Grid item lg={4} md={12} className={classes.displayFlex}>
                <CustomLabel name={'Showable End Date'} isRequired={false} />
                <CustomTextField
                  id="date"
                  type="date"
                  formik={formik}
                  name="showableEndDate"
                />
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              container
              justifyContent="flex-start"
              spacing={2}
            >
              <Grid item lg={4} md={12} className={classes.displayFlex}>
                <CustomLabel name={'Confirmation Type'} isRequired={true} />
                <CustomSelect
                  formik={formik}
                  options={PROPERTY_CONFIRMATION_TYPES}
                  name="confirmationType"
                  showKeyValue={true}
                />
              </Grid>
              <Grid item lg={4} md={12} className={classes.displayFlex}>
                <CustomLabel name={'Showing Method'} isRequired={true} />
                <CustomSelect
                  formik={formik}
                  options={SHOWING_METHOD_TYPES}
                  name="showingMethod"
                  showKeyValue={true}
                />
              </Grid>
              <Grid item lg={4} md={12} className={classes.displayFlex}>
                <CustomLabel name={'Required Participants'} isRequired={true} />
                <CustomSelect
                  formik={formik}
                  options={REQUIRED_PARTICIPANTS_TYPES}
                  name="requiredParticipants"
                  showKeyValue={true}
                />
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              container
              justifyContent="flex-start"
              spacing={2}
            >
              <Grid item md={12} sm={12} className={classes.displayFlex}>
                <CustomLabel name={'Showing Instructions'} isRequired={false} />
                <CustomTextField
                  formik={formik}
                  name="showingInstructions"
                  longTextField={true}
                />
              </Grid>
            </Grid>
          </>
        )}
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

export default RegisterPropertyForm
