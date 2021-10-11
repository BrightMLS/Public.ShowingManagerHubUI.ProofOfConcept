import { colors as paletteColors } from '@material-ui/core'

const palette = {
  primary: {
    main: '#C4C4C4',
    contrastText: '#fff',
  },
  secondary: {
    main: '#fff',
    dark: paletteColors.grey[100],
    contrastText: paletteColors.grey[900],
  },
  text: {
    primary: paletteColors.grey[900],
  },
  error: {
    main: paletteColors.grey[700],
  },
  background: {
    default: '#ffffff',
  },
}

export default palette
