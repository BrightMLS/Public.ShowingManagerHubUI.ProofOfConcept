import { Theme, makeStyles } from '@material-ui/core/styles'

const CustomModalStyle = makeStyles((theme: Theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    height: 200,
    backgroundColor: 'rgba(196, 196, 196, 1)',

    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    transform: 'translate(150%, 50%)',
  },
  text: {
    whiteSpace: 'pre-line',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    textAlign: 'center',
  },
  button: {
    width: '100%',
    marginTop: theme.spacing(2),
    position: 'relative',
  },
  close: {
    position: 'absolute',
    top: '50%',
    transform: 'translate(200%,50%)',
  },
}))

export default CustomModalStyle
