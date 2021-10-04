import { Theme, makeStyles } from '@material-ui/core/styles'
import { COLOR, FONT_WEIGHT } from 'constant'

const FindRequestFormStyle = makeStyles((theme: Theme) => ({
  root: { display: 'flex', justifyContent: 'center', alignItems: 'center' },
  form: { display: 'flex', width: '100%' },
  titleWrapper: { marginTop: theme.spacing(4), marginBottom: theme.spacing(1) },
  title: {
    color: '#000000',
    fontSize: '1.3rem',
    fontWeight: FONT_WEIGHT.BOLD,
    lineHeight: '14px',
  },
  requestIdForm: {
    display: 'flex',
  },
  buttonWrapper: {
    display: 'flex',
    maxHeight: 30,
    marginLeft: theme.spacing(2),
  },
  submitButton: {
    background: COLOR.grey,
    mixBlendMode: 'darken',
    border: `1px solid #000000`,
    boxSizing: 'border-box',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '0',
    width: 100,
  },
  textSubmit: {
    color: '#000 !important',
    textTransform: 'none',
    fontSize: '1.125rem',
  },
  divider: {
    width: '100%',
    marginTop: theme.spacing(1.5),
    marginBottom: theme.spacing(2.5),
  },
  responseHub: { fontWeight: FONT_WEIGHT.BOLD, fontSize: '1.3rem' },
  rootStyle: { display: 'block' },
  inputStyle: { marginTop: theme.spacing(2), marginLeft: theme.spacing(4) },
  customLableStyle: { width: 'auto', marginRight: '12%' },
  marginBottomStyle: { marginBottom: theme.spacing(10) },
}))

export default FindRequestFormStyle
