import { Theme, makeStyles } from '@material-ui/core/styles'
import { FONT_WEIGHT } from 'constant'

const CustomLabelStyle = makeStyles((theme: Theme) => ({
  placeHolder: {
    fontSize: '1rem',
    lineHeight: '14px',
    fontWeight: FONT_WEIGHT.NORMAL,
    fontStyle: 'normal',
    color: '#000000',
    width: 240,
  },
}))

export default CustomLabelStyle
