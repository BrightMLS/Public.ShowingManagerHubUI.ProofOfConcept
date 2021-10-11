import { useState, useEffect, Fragment } from 'react'
import {
  Grid,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
  Box,
  Hidden,
  Toolbar,
  IconButton,
} from '@material-ui/core'
import useStyle from './sidebar-style'
import { useHistory, useLocation } from 'react-router-dom'
import { sideBarLinks, enable_submenu } from 'constant'
import { sideBarLinkIndex, findAuthTab } from 'utils'
import MenuIcon from '@material-ui/icons/Menu'

const SideBar = (props: any) => {
  const classes = useStyle()
  const history = useHistory()
  const location: any = useLocation()
  const pathname = location?.pathname
  const [mobileOpen, setMobileOpen] = useState(false)
  const { window } = props

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }
  let sideBarContent: Array<any> = []
  let isLoggedIn: boolean = false
  const userDetails: string = localStorage.getItem('userDetails')!
  const appName: string = JSON.parse(userDetails)?.applicationName
  if (userDetails) {
    sideBarContent = sideBarLinks[enable_submenu.true]
    isLoggedIn = true
  } else {
    sideBarContent = sideBarLinks[enable_submenu.false]
  }
  const [selectedTab, setSelectedTab] = useState<number>(
    sideBarLinkIndex(pathname, enable_submenu.false),
  )
  const [isParentList, setIsParentList] = useState<number>(0)

  useEffect(() => {
    if (isLoggedIn) {
      const { childIndex, parentIndex } = sideBarLinkIndex(
        pathname,
        enable_submenu.true,
      )
      setSelectedTab(childIndex)
      setIsParentList(parentIndex)
    } else {
      setSelectedTab(sideBarLinkIndex(pathname, enable_submenu.false))
    }
  }, [pathname, isLoggedIn])

  /**
   *
   * @param index // number
   * @param route // which route we want to move
   * @returns
   */
  const handleTab =
    (index: number, route: string) =>
    (e: any): void => {
      e.preventDefault()
      if (isLoggedIn) {
        const { childIndex, parentIndex } = findAuthTab(route, sideBarContent)
        setSelectedTab(childIndex)
        setIsParentList(parentIndex)
      } else {
        setSelectedTab(index)
      }
      history.push(route)
    }
  const logout = () => {
    localStorage.clear()
    history.push('/')
  }
  const container =
    window !== undefined ? () => window().document.body : undefined

  const drawer = (
    <List>
      {isLoggedIn ? (
        <ListItem className={classes.appName}>
          <ListItemText
            primary={`Logged in As: [ ${appName} ]`}
            className={classes.text}
          />
        </ListItem>
      ) : null}
      {!isLoggedIn &&
        sideBarContent.map((v, i) => (
          <ListItem
            button
            key={i}
            classes={{ selected: classes.listItem }}
            selected={selectedTab === i ? true : false}
          >
            <ListItemText
              primary={v.value}
              className={
                selectedTab === i ? classes.textSelected : classes.text
              }
              onClick={handleTab(i, v.route)}
            />
          </ListItem>
        ))}
      {isLoggedIn &&
        sideBarContent.map((v: any, i: number) => {
          return (
            <Box key={i} className={classes.authWrapper}>
              <Typography variant="h3" className={classes.headerTitle}>
                {v.title}
              </Typography>
              {v.submenu.map((list: any, index: number) => {
                return (
                  <Fragment key={index}>
                    <ListItem
                      button
                      key={i}
                      className={classes.wrapperSection}
                      classes={{ selected: classes.listItem }}
                      selected={
                        selectedTab === index && i === isParentList
                          ? true
                          : false
                      }
                    >
                      <ListItemText
                        primary={list.value}
                        className={
                          selectedTab === index && i === isParentList
                            ? classes.textSelected
                            : classes.text
                        }
                        onClick={handleTab(i, list.route)}
                      />
                    </ListItem>
                  </Fragment>
                )
              })}
            </Box>
          )
        })}
      {isLoggedIn ? (
        <ListItem button className={classes.logout}>
          <ListItemText
            primary={`Logout`}
            className={classes.text}
            onClick={logout}
          />
        </ListItem>
      ) : null}
    </List>
  )
  return (
    <Grid container item>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor="left"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              root: classes.root,
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </Grid>
  )
}

export default SideBar
