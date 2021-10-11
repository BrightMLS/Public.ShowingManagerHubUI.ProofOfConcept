import { makeStyles } from '@material-ui/core/styles'

const HeaderTitleStyle = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    '@media (max-width:850px)': {
      '&.MuiTypography-h1': {
        fontSize: '2rem',
      },
    },
  },
}))

export default HeaderTitleStyle
