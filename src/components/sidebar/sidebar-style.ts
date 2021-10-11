import { Theme, makeStyles } from '@material-ui/core/styles'
import { COLOR, FONT_WEIGHT } from 'constant'
const drawerWidth = 240

const SideBarStyle = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    background: COLOR.brown,
  },
  text: {
    color: '#ffffff',
    fontWeight: FONT_WEIGHT.SEMIBOLD,
  },
  listItem: {
    backgroundColor: `${COLOR.yellow} !important`,
    paddingTop: theme.spacing(0.3),
    paddingBottom: theme.spacing(0.3),
  },
  textSelected: {
    color: COLOR.brown,
    fontWeight: FONT_WEIGHT.SEMIBOLD,
  },
  appName: {
    marginBottom: theme.spacing(3.5),
    [theme.breakpoints.between('sm', 'md')]: {
      marginBottom: theme.spacing(2),
    },
  },
  logout: { marginTop: theme.spacing(7) },
  headerTitle: { color: '#ffffff', marginLeft: theme.spacing(2) },
  wrapperSection: {
    paddingTop: theme.spacing(0.2),
    paddingBottom: theme.spacing(0.2),
    [theme.breakpoints.between('sm', 'md')]: {
      paddingTop: theme.spacing(0.1),
      paddingBottom: theme.spacing(0.1),
    },
  },
  authWrapper: {
    marginBottom: theme.spacing(2),
  },
}))

export default SideBarStyle
