import { Theme, makeStyles } from '@material-ui/core/styles'

const RegisterOrganizationStyle = makeStyles((theme: Theme) => ({
  root: { display: 'flex', justifyContent: 'center' },
  header: { display: 'flex' },
  input: {
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center',
  },
  textField: {
    border: '3px solid #ccc;',
    outline: 'none',
    ':focus': {
      border: '3px solid #555',
    },
  },
  label: { marginRight: theme.spacing(5) },
}))

export default RegisterOrganizationStyle
