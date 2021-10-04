import { Theme, makeStyles } from '@material-ui/core/styles'

const DialogStyle = makeStyles((theme: Theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: 'rgba(196, 196, 196, 1)',
    background: 'rgba(196, 196, 196, 1)',
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    transform: 'translate(150%, 50%)',
  },
  text: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  button: {
    width: 76,
  },
  disabledButton: {
    width: 76,
    backgroundColor: 'rgba(196, 196, 196, 1)',
    paddingLeft: theme.spacing(2.5),
  },
}))

export default DialogStyle
