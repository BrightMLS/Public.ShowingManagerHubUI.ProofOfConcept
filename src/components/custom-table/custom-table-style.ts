import { Theme, makeStyles } from '@material-ui/core/styles'

const CustomTableStyle = makeStyles((theme: Theme) => ({
  root: {
    background: 'rgba(196, 196, 196, 1)',
  },
  icon: {
    paddingTop: theme.spacing(0.5),
    paddingRight: theme.spacing(1),
    paddingBottom: theme.spacing(-2),
  },
  tableHeader: {
    background: 'rgba(165, 168, 166)',
    fontSize: 20,
  },
}))

export default CustomTableStyle
