import { Theme, makeStyles } from '@material-ui/core/styles'

const CustomWeekCheckboxStyle = makeStyles((theme: Theme) => ({
  root: { display: 'flex' },
  displayFlex: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    marginBottom: theme.spacing(1.5),
  },
  label: {
    fontWeight: 700,
    fontSize: '0.8rem',
  },
}))

export default CustomWeekCheckboxStyle
