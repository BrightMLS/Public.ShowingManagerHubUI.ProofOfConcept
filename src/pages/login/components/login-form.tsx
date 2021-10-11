import { Grid, Button, Typography } from '@material-ui/core'
import { CustomTextField, CustomLabel, ResponseHub } from 'components'
import useStyles from './login-form-style'

interface IProps {
  formik: Record<string, any>
  response?: any | null
  statusType?: boolean
}
const LoginForm = ({ formik, response, statusType }: IProps) => {
  const classes = useStyles()
  return (
    <form onSubmit={formik.handleSubmit} className={classes.form}>
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12} container justifyContent="flex-start" spacing={2}>
          <Grid item lg={6} md={12} className={classes.innerGrid}>
            <CustomLabel
              name={'App Key'}
              isRequired={true}
              customLableStyle={classes.appKeyLabel}
            />
            <CustomTextField formik={formik} name="appKey" />
          </Grid>
          <Grid item lg={6} md={12} className={classes.innerGrid}>
            <CustomLabel name={'Application ID'} isRequired={true} />
            <CustomTextField formik={formik} name="applicationID" />
          </Grid>
        </Grid>
        <Grid
          container
          item
          lg={6}
          md={12}
          xs={12}
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
          <ResponseHub
            isResponse={statusType}
            responseObject={response}
            rootStyle={classes.rootStyle}
          />
        </Grid>
      </Grid>
    </form>
  )
}

export default LoginForm
