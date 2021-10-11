import { makeStyles, Theme } from '@material-ui/core/styles'

const CustomTitleStyle = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    fontWeight: 750,
    marginBottom: theme.spacing(1.5),
  },
}))

export default CustomTitleStyle
