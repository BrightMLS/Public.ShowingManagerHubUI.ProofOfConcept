import { Box, TextField, TextFieldProps } from '@material-ui/core'
import useStyle from './custom-textfield-style'

type CustomTextFieldPropsType = {
  formik: Record<string, any>
  name: string
  autoFocus?: boolean
  hideBelowFieldError?: boolean
  longTextField?: boolean
} & TextFieldProps

const CustomTextField = ({
  formik,
  name,
  autoFocus,
  hideBelowFieldError,
  longTextField,
  ...rest
}: CustomTextFieldPropsType) => {
  const classes = useStyle()
  const errorMsg = formik!.touched[name] && formik!.errors[name]

  return (
    <Box className={classes.root}>
      <TextField
        variant="outlined"
        name={name}
        className={longTextField ? classes.longInputField : classes.inputField}
        value={formik!.values[name]}
        autoComplete="off"
        autoFocus={autoFocus}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          formik!.setFieldTouched(name)
          formik!.handleChange(event)
        }}
        error={formik!.touched[name] && Boolean(formik!.errors[name])}
        {...rest}
      />
      {!hideBelowFieldError && errorMsg && (
        <div className="error-label">{errorMsg}</div>
      )}
    </Box>
  )
}

export default CustomTextField
