import { Checkbox } from '@material-ui/core'

type CustomCheckBoxPropsType = {
  formik: Record<string, any>
  name: string
  hideBelowFieldError?: boolean
}

const CustomCheckbox = ({ formik, name, ...rest }: CustomCheckBoxPropsType) => {
  return (
    <Checkbox
      color="default"
      name={name}
      checked={formik!.values[name]}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
        formik!.setFieldTouched(name)
        formik!.handleChange(event)
      }}
      inputProps={{ 'aria-label': 'checkbox with default color' }}
      {...rest}
    />
  )
}

export default CustomCheckbox
