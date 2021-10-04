import { Theme, makeStyles } from '@material-ui/core/styles'
import { COLOR } from 'constant'
const AlertStyle = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
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
  formContainer: {
    paddingTop: theme.spacing(10),
  },
  innerGrid: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    '& span': {
      width: 'auto',
      marginRight: theme.spacing(3),
    },
  },
  displayFlex: {
    display: 'flex',
    alignItems: 'center',
  },
  refreshButton: {
    background: COLOR.grey,
    mixBlendMode: 'darken',
    border: `1px solid #000000`,
    boxSizing: 'border-box',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '0',
    width: 179,
  },
  textRefresh: {
    color: '#000 !important',
    textTransform: 'none',
    fontSize: '1.125rem',
  },
  buttonWrapper: {
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(10),
    flexDirection: 'column',
  },
  sideButtonWrapper: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  rootStyle: {
    width: 1000,
    [theme.breakpoints.between(768, 1280)]: {
      display: 'block',
    },
  },
}))

export default AlertStyle
