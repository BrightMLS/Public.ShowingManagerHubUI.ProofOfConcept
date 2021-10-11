import { makeStyles, Theme } from '@material-ui/core'
import { FONT_FAMILY } from 'constant'

const LoaderStyle = makeStyles((theme: Theme) => ({
  spinnerContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 9999,
    color: '#fff',
    textTransform: 'uppercase',
    '& .MuiTypography-root': {
      marginTop: theme.spacing(2),
      fontFamily: FONT_FAMILY.LATO,
      fontWeight: 300,
      fontSize: '1.5rem',
    },
  },
  spinner: {
    width: 100,
    height: 100,
    border: '2px solid #f3f3f3',
    borderRightColor: '#FE4602',
    borderTopColor: '#FE4602',
    borderRadius: '100%',
    animation: '$spinner 1s infinite linear',
  },
  '@keyframes spinner': {
    from: {
      transform: 'rotate(0deg)',
    },
    to: {
      transform: 'rotate(359deg)',
    },
  },
  backdrop: {
    opacity: '0.5 !important',
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: '#000',
  },
}))

export default LoaderStyle
