import { Theme, makeStyles } from '@material-ui/core/styles'

const RegisterPropertyStyle = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(3),
    '@media (min-width:780px) and (max-width:960px)': {
      paddingLeft: '20%',
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(-10),
    },
    '@media (min-width:700px) and (max-width:780px)': {
      paddingLeft: '10%',
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(-10),
    },
  },

  header: {
    display: 'flex',
    '@media (max-width)': {
      fontSize: '5rem',
    },
  },
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

export default RegisterPropertyStyle
