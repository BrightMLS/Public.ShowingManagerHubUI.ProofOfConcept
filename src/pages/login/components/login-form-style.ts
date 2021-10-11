import { Theme, makeStyles } from '@material-ui/core/styles'
import { COLOR } from 'constant'

const LoginFormStyle = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: theme.spacing(12),
    justifyContent: 'center',
    paddingLeft: theme.spacing(10),
    paddingRight: theme.spacing(10),
    [theme.breakpoints.down('md')]: {
      paddingTop: theme.spacing(4),
      paddingLeft: theme.spacing(0),
      paddingRight: theme.spacing(0),
    },
  },
  form: { display: 'flex', width: '100%' },
  innerGrid: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing(1.5),
    '& span': {
      width: 'auto',
      marginRight: theme.spacing(3),
    },
  },
  displayFlex: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(1.5),
  },
  submitButton: {
    background: COLOR.grey,
    mixBlendMode: 'darken',
    border: `1px solid #000000`,
    boxSizing: 'border-box',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '0',
    width: 179,
  },
  textSubmit: {
    color: '#000 !important',
    textTransform: 'none',
    fontSize: '1.125rem',
  },
  buttonWrapper: {
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(10),
    flexDirection: 'column',
    marginRight: '15%',
    [theme.breakpoints.between(768, 1280)]: {
      flexDirection: 'row',
      marginLeft: '18%',
      marginTop: theme.spacing(6),
    },
  },
  appKeyLabel: {
    width: 'auto',
    [theme.breakpoints.between(768, 1280)]: {
      marginRight: '7.5% !important',
    },
  },
  rootStyle: {
    [theme.breakpoints.between(768, 1280)]: {
      display: 'block',
    },
  },
}))

export default LoginFormStyle
