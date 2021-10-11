import { Grid, Button, Typography, Divider, Box } from '@material-ui/core'
import { CustomLabel, CustomTextField, ResponseHub } from 'components'
import clsx from 'clsx'

import useStyle from './find-request-form-style'

interface IProps {
  formik: Record<string, any>
  response: any | null
  statusType?: boolean
}
const FindRequestFrom = ({ formik, response, statusType }: IProps) => {
  const classes = useStyle()
  return (
    <form className={classes.form} onSubmit={formik.handleSubmit}>
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12} container justifyContent="flex-start">
          <Grid item xs={12} className={classes.titleWrapper}>
            <Typography variant="inherit" className={classes.title}>
              {'Find the request'}
            </Typography>
          </Grid>
          <Grid item md={5} sm={5} className={classes.requestIdForm}>
            <CustomLabel
              name={'Appointment ID'}
              isRequired={false}
              customLableStyle={classes.customLableStyle}
            />
            <CustomTextField formik={formik} name="requestId" />
            <Box className={classes.buttonWrapper}>
              <Button
                type="submit"
                className={classes.submitButton}
                variant="contained"
              >
                <Typography className={classes.textSubmit}>{'Find'}</Typography>
              </Button>
            </Box>
          </Grid>
        </Grid>
        <Divider className={classes.divider} />
        <Grid container item xs={12} md={12}>
          <ResponseHub
            rootStyle={classes.rootStyle}
            titleStyle={classes.responseHub}
            inputStyle={classes.inputStyle}
            isResponse={statusType}
            responseObject={response}
            title="Request Information"
          />
        </Grid>
        <Divider className={clsx(classes.divider, classes.marginBottomStyle)} />
      </Grid>
    </form>
  )
}

export default FindRequestFrom
