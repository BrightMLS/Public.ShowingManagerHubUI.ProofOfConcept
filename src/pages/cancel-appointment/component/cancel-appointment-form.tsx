import { Grid, Button, Typography } from '@material-ui/core'
import {
  CustomTextField,
  CustomLabel,
  ResponseHub,
  CustomSelect,
} from 'components'
import { CANCEL_APPOINTMENT_REASONS } from 'constant'
import useStyles from './cancel-appointment-form-style'

interface IProps {
  formik: Record<string, any>
  response?: any | null
  statusType?: boolean
}
const CancelAppointmentForm = ({ formik, response, statusType }: IProps) => {
  const classes = useStyles()
  return (
    <form onSubmit={formik.handleSubmit} className={classes.form}>
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12} lg={12} container spacing={2}>
          <Grid item lg={12} md={12} className={classes.displayFlex}>
            <CustomLabel name={'Appointment ID'} isRequired={true} />
            <CustomTextField formik={formik} name="appointmentId" />
          </Grid>

          <Grid item lg={12} md={12} className={classes.displayFlex}>
            <CustomLabel name={'Initiator'} isRequired={false} />
            <CustomTextField formik={formik} name="initiator" />
          </Grid>
          <Grid item xs={12} container justifyContent="flex-start" spacing={2}>
            <Grid item lg={12} md={12} className={classes.displayFlex}>
              <CustomLabel name={'Cancel Reason'} isRequired={true} />
              <CustomSelect
                formik={formik}
                options={CANCEL_APPOINTMENT_REASONS}
                name="cancelReason"
                showKeyValue={true}
              />
            </Grid>
          </Grid>
          <Grid item lg={12} md={12} className={classes.displayFlex}>
            <CustomLabel name={'Cancellation Comments'} isRequired={false} />
            <CustomTextField
              formik={formik}
              name="cancellationComments"
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

export default CancelAppointmentForm
