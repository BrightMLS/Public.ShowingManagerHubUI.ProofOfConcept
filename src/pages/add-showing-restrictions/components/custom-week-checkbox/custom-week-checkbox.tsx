import { Checkbox, InputLabel, Grid } from '@material-ui/core'
import useStyles from './custom-week-checkbox-style'
type CustomCheckBoxPropsType = {
  formik: Record<string, any>
  hideBelowFieldError?: boolean
}

const CustomWeekCheckbox = ({ formik, ...rest }: CustomCheckBoxPropsType) => {
  const classes = useStyles()
  const errorMsg = formik!.touched['weekDay'] && formik!.errors['weekDay']
  return (
    <>
      <Grid container className={classes.root}>
        <Grid item className={classes.displayFlex}>
          <InputLabel className={classes.label}>Sun</InputLabel>
          <Checkbox
            color="default"
            checked={formik!.values['sun']}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              formik!.setFieldValue('sun', !formik.values['sun'])
              formik!.handleChange(event)
            }}
            inputProps={{ 'aria-label': 'checkbox with default color' }}
            {...rest}
          />
        </Grid>
        <Grid item className={classes.displayFlex}>
          <InputLabel className={classes.label}>Mon</InputLabel>
          <Checkbox
            color="default"
            checked={formik!.values['mon']}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              formik!.setFieldValue('mon', !formik.values['mon'])
              formik!.handleChange(event)
            }}
            inputProps={{ 'aria-label': 'checkbox with default color' }}
            {...rest}
          />
        </Grid>

        <Grid item className={classes.displayFlex}>
          <InputLabel className={classes.label}>Tue</InputLabel>
          <Checkbox
            color="default"
            checked={formik!.values['tue']}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              formik!.setFieldValue('tue', !formik.values['tue'])
              formik!.handleChange(event)
            }}
            inputProps={{ 'aria-label': 'checkbox with default color' }}
            {...rest}
          />
        </Grid>
        <Grid item className={classes.displayFlex}>
          <InputLabel className={classes.label}>Wed</InputLabel>
          <Checkbox
            color="default"
            checked={formik!.values['wed']}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              formik!.setFieldValue('wed', !formik.values['wed'])
              formik!.handleChange(event)
            }}
            inputProps={{ 'aria-label': 'checkbox with default color' }}
            {...rest}
          />
        </Grid>
        <Grid item className={classes.displayFlex}>
          <InputLabel className={classes.label}>Thu</InputLabel>
          <Checkbox
            color="default"
            checked={formik!.values['thu']}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              formik!.setFieldValue('thu', !formik.values['thu'])
              formik!.handleChange(event)
            }}
            inputProps={{ 'aria-label': 'checkbox with default color' }}
            {...rest}
          />
        </Grid>
        <Grid item className={classes.displayFlex}>
          <InputLabel className={classes.label}>Fri</InputLabel>
          <Checkbox
            color="default"
            checked={formik!.values['fri']}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              formik!.setFieldValue('fri', !formik.values['fri'])
              formik!.handleChange(event)
            }}
            inputProps={{ 'aria-label': 'checkbox with default color' }}
            {...rest}
          />
        </Grid>
        <Grid item className={classes.displayFlex}>
          <InputLabel className={classes.label}>Sat</InputLabel>
          <Checkbox
            color="default"
            checked={formik!.values['sat']}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              formik!.setFieldValue('sat', !formik.values['sat'])
              formik!.handleChange(event)
            }}
            inputProps={{ 'aria-label': 'checkbox with default color' }}
            {...rest}
          />
        </Grid>
        {errorMsg && <div className="error-label">{errorMsg}</div>}
      </Grid>
    </>
  )
}

export default CustomWeekCheckbox
