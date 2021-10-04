import { Grid } from '@material-ui/core'
import {
  CustomLabel,
  ResponseHub,
  CustomSelect,
  CustomButton,
} from 'components'
import { REQUEST_STATUS } from 'constant'

import useStyle from './post-request-form-style'

interface IProps {
  formik: Record<string, any>
  response: any | null
  statusType?: boolean
}
const PostRequestForm = ({ formik, response, statusType }: IProps) => {
  const classes = useStyle()
  return (
    <form className={classes.form} onSubmit={formik.handleSubmit}>
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12} container justifyContent="flex-start">
          <Grid item md={5} sm={5} className={classes.postwarpperForm}>
            <CustomLabel name={'Request Status'} isRequired={false} />
            <CustomSelect
              formik={formik}
              options={REQUEST_STATUS}
              name="requestStatus"
            />
          </Grid>
          <CustomButton rootStyle={classes.rootStyle} />
        </Grid>
        <Grid container item xs={12} md={12}>
          <ResponseHub isResponse={statusType} responseObject={response} />
        </Grid>
      </Grid>
    </form>
  )
}

export default PostRequestForm
