import { Theme, makeStyles } from '@material-ui/core/styles'
import { COLOR, FONT_WEIGHT } from 'constant'

const LayoutStyle = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    padding: theme.spacing(2, 2, 3, 4),
    '& .error-label': {
      margin: theme.spacing(0.5, 0),
      fontSize: '0.75rem',
      fontStyle: 'italic',
      fontWeight: FONT_WEIGHT.SEMIBOLD,
      color: COLOR.red,
    },
  },
}))

export default LayoutStyle
