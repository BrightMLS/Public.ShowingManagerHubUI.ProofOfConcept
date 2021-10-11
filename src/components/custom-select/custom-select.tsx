import { Box } from '@material-ui/core'
import useStyle from './custom-select-style'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'

type CustomSelectPropsType = {
  formik: Record<string, any>
  options: string[]
  name: string
  autoFocus?: boolean
  hideBelowFieldError?: boolean
  showKeyValue?: boolean
}

const CustomSelect = ({
  formik,
  name,
  autoFocus,
  hideBelowFieldError,
  options,
  showKeyValue,
  ...rest
}: CustomSelectPropsType) => {
  const classes = useStyle()
  const errorMsg = formik!.touched[name] && formik!.errors[name]
  // it return the key on showing value on select input
  const returnKeyMapValue = (val: string) => {
    if (val) {
      const keyMapped: any = options.find((v: any) => v.value === val)
      const propOwn = Object.getOwnPropertyNames(keyMapped)
      if (propOwn.length) {
        return keyMapped.key
      }
    }
    return val
  }
  return (
    <Box className={classes.root}>
      <Select
        variant="outlined"
        name={name}
        className={classes.inputField}
        value={formik!.values[name]}
        inputProps={{ 'aria-label': 'Without label' }}
        displayEmpty={true}
        renderValue={(value: any) =>
          value?.length
            ? showKeyValue
              ? returnKeyMapValue(value)
              : value
            : 'Picklist'
        }
        onChange={(event: any) => {
          formik!.setFieldTouched(name)
          formik!.handleChange(event)
        }}
        error={formik!.touched[name] && Boolean(formik!.errors[name])}
        MenuProps={{
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'left',
          },
          getContentAnchorEl: null,
        }}
        {...rest}
      >
        {options.map((val: any, index: number) => (
          <MenuItem key={index} value={val.value}>
            {val.key}
          </MenuItem>
        ))}
      </Select>
      {!hideBelowFieldError && errorMsg && (
        <div className="error-label">{errorMsg}</div>
      )}
    </Box>
  )
}

export default CustomSelect
