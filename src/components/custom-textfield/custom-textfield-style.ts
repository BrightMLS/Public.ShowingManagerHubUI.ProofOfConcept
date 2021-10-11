import { Theme, makeStyles } from '@material-ui/core/styles'

const CustomTextFieldStyle = makeStyles((theme: Theme) => ({
  root: { display: 'flex', flexDirection: 'column' },
  inputField: {
    background: 'rgba(196, 196, 196, 1)',
    maxHeight: 30,
    width: 223,
    maxWidth: '100%',
    border: '#000',
    borderWidth: 1,
  },
  longInputField: {
    background: 'rgba(196, 196, 196, 1)',
    maxHeight: 30,
    width: 600,
    maxWidth: '100%',
    border: '#000',
    borderWidth: 1,
    [theme.breakpoints.down('md')]: {
      width: 223,
    },
  },
}))

export default CustomTextFieldStyle
