import { Grid } from '@material-ui/core'
import { SideBar } from 'components'
import useStyle from './layout-style'

interface IProps {
  children: JSX.Element[] | JSX.Element
}
const Layout = ({ children }: IProps) => {
  const classes = useStyle()
  return (
    <Grid container>
      <Grid item xs={12} lg={2} sm={2} md={2}>
        <SideBar />
      </Grid>
      <Grid item xs={12} lg={10} sm={10} md={10} className={classes.root}>
        {children}
      </Grid>
    </Grid>
  )
}

export default Layout
