import { Grid, Button, Typography, Divider } from '@material-ui/core'
import {
  CustomTextField,
  CustomLabel,
  ResponseHub,
  CustomTitle,
  CustomCheckbox,
} from 'components'
import CustomWeekCheckbox from '../custom-week-checkbox/custom-week-checkbox'
import useStyles from './add-showing-restrictions-form-style'

interface IProps {
  formik: Record<string, any>
  response?: any | null
  statusType?: boolean
}
const AddShowingRestrictionsForm = ({
  formik,
  response,
  statusType,
}: IProps) => {
  const classes = useStyles()
  const numberOfWeeks = !formik!.values.noEndDate ? (
    <>
      <CustomLabel
        name={'Number Of Weeks'}
        isRequired={true}
        customLableStyle={classes.customLabelStyle}
      />
      <CustomTextField
        formik={formik}
        name="numberOfWeeks"
        type="number"
        minRows="0"
      />
    </>
  ) : null
  return (
    <form onSubmit={formik.handleSubmit} className={classes.form}>
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12} container justifyContent="flex-start" spacing={2}>
          <Grid item lg={6} md={12} className={classes.displayFlex}>
            <CustomLabel
              name={'Show Listing ID'}
              isRequired={true}
              customLableStyle={classes.customLabelStyle}
            />
            <CustomTextField formik={formik} name="showListingID" />
          </Grid>
          <Grid item lg={6} md={12} className={classes.displayFlex}>
            <Grid item lg={6} md={6} className={classes.displayFlex}>
              <Grid item lg={6} md={6}>
                <CustomLabel
                  name={'Add Single Restriction'}
                  isRequired={false}
                  customLableStyle={classes.customLabelStyle}
                />
              </Grid>
              <Grid item lg={6} md={6}>
                <CustomCheckbox formik={formik} name="addRestriction" />
              </Grid>
            </Grid>
            <Grid item lg={6} md={12} className={classes.displayFlex}>
              <Grid item lg={6} md={6}>
                <CustomLabel
                  name={'Add Reoccuring Restriction'}
                  isRequired={false}
                  customLableStyle={classes.customLabelStyle}
                />
              </Grid>
              <Grid item lg={6} md={6}>
                <CustomCheckbox formik={formik} name="addReoccuring" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {formik!.values['addRestriction'] ? (
          <Grid item xs={12} container justifyContent="flex-start" spacing={2}>
            <Grid item xs={12} container>
              <CustomTitle
                title={'Specific start and end times for restrictions'}
              ></CustomTitle>
            </Grid>
            <Grid
              item
              lg={6}
              md={6}
              sm={12}
              xs={12}
              className={classes.displayFlex}
            >
              <CustomLabel
                name={'Start Date/Time'}
                isRequired={true}
                customLableStyle={classes.customLabelStyle}
              />
              <CustomTextField
                formik={formik}
                name="startDate"
                type="datetime-local"
              />
            </Grid>
            <Grid
              item
              lg={6}
              md={6}
              sm={12}
              xs={12}
              className={classes.displayFlex}
            >
              <CustomLabel
                name={'End Date/Time'}
                isRequired={true}
                customLableStyle={classes.customLabelStyle}
              />
              <CustomTextField
                formik={formik}
                name="endDate"
                type="datetime-local"
              />
            </Grid>
          </Grid>
        ) : null}
        {formik!.values['addRestriction'] && formik!.values['addReoccuring'] ? (
          <Divider className={classes.divider} />
        ) : null}
        {formik!.values['addReoccuring'] ? (
          <Grid item xs={12} container justifyContent="flex-start" spacing={2}>
            <Grid item xs={12} container>
              <CustomTitle title={'Reoccuring Restrictions'}></CustomTitle>
            </Grid>
            <Grid
              item
              lg={6}
              md={6}
              sm={12}
              xs={12}
              className={classes.displayFlex}
            >
              <CustomLabel
                name={'Day Of Week'}
                isRequired={true}
                customLableStyle={classes.customLabelStyle}
              />

              <CustomWeekCheckbox formik={formik}></CustomWeekCheckbox>
            </Grid>
            <Grid
              item
              lg={6}
              md={6}
              sm={12}
              xs={12}
              className={classes.displayFlex}
            >
              <CustomLabel
                name={'Begin Date'}
                isRequired={true}
                customLableStyle={classes.customLabelStyle}
              />
              <CustomTextField
                formik={formik}
                name="beginDate"
                type="datetime-local"
              />
            </Grid>
            <Grid
              item
              lg={6}
              md={6}
              sm={12}
              className={classes.displayFlexNoEndDate}
            >
              <CustomLabel
                name={'No End Date'}
                isRequired={false}
                customLableStyle={classes.customLabelStyle}
              />
              <CustomCheckbox formik={formik} name="noEndDate" />
            </Grid>
            <Grid
              item
              lg={6}
              md={6}
              sm={12}
              className={classes.displayFlexNoEndDate}
            >
              {numberOfWeeks}
            </Grid>
            <Grid
              item
              lg={6}
              md={6}
              sm={12}
              xs={12}
              className={classes.displayFlex}
            >
              <CustomLabel
                name={'Start Time'}
                isRequired={true}
                customLableStyle={classes.customLabelStyle}
              />
              <CustomTextField
                formik={formik}
                name="startTime"
                type="datetime-local"
              />
            </Grid>
            <Grid
              item
              lg={6}
              md={6}
              sm={12}
              xs={12}
              className={classes.displayFlex}
            >
              <CustomLabel
                name={'End Time'}
                isRequired={true}
                customLableStyle={classes.customLabelStyle}
              />
              <CustomTextField
                formik={formik}
                name="endTime"
                type="datetime-local"
              />
            </Grid>
          </Grid>
        ) : null}

        <Grid
          container
          item
          xs={12}
          md={10}
          justifyContent="center"
          className={classes.buttonWrapper}
        >
          <Button
            type={
              formik.values['addReoccuring'] || formik.values['addRestriction']
                ? 'submit'
                : undefined
            }
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

export default AddShowingRestrictionsForm
