import { createTheme } from '@material-ui/core/styles'

import props from './props'
import palette from './palette'
import typography from './typography'
import overrides from './overrides'

let theme = createTheme({
  props,
  palette,
  typography,
})

theme.overrides = overrides(theme)
export default theme
