import { Theme, makeStyles } from '@material-ui/core/styles'
import { COLOR } from 'constant'

const CustomButtonStyle = makeStyles((theme: Theme) => ({
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
  },
}))

export default CustomButtonStyle
