import React from 'react'
import {
  createStyles,
  withStyles,
  WithStyles,
  Theme,
} from '@material-ui/core/styles'
import Hidden from '@material-ui/core/Hidden'
import Typography from '@material-ui/core/Typography'
import {
  AppBar,
  Avatar,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

export const MOBILE_BREAK_POINT = 'sm'

const Copyright: React.FC = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © test'}
    </Typography>
  )
}

const MenuList: React.FC = () => {
  return (
    <List>
      {['株価情報', '自身の情報'].map((text) => (
        <ListItem button key={text}>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
  )
}

const drawerWidth = 256
const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      minHeight: '100vh',
    },
    drawer: {
      [theme.breakpoints.up(MOBILE_BREAK_POINT)]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up(MOBILE_BREAK_POINT)]: {
        display: 'none',
      },
    },
    drawerPaper: {
      width: drawerWidth,
    },
    app: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
    },
    main: {
      flex: 1,
      padding: theme.spacing(3, 3),
      background: '#ffffff',
    },
    footer: {
      padding: theme.spacing(2),
      background: '#ffffff',
    },
  })

export type PaperbaseProps = WithStyles<typeof styles> & {
  children: React.ReactNode
}

const Paperbase: React.FC<PaperbaseProps> = (props: PaperbaseProps) => {
  const { classes, children } = props
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  return (
    <div className={classes.root}>
      <nav className={classes.drawer}>
        <Hidden smUp implementation="css">
          <Drawer
            // container={container}
            variant="temporary"
            anchor={'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <MenuList />
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
            <MenuList />
          </Drawer>
        </Hidden>
      </nav>
      <div className={classes.app}>
        <AppBar position="sticky">
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
            <Typography component="h1" variant="h6" color="inherit" noWrap>
              株価情報
            </Typography>
            <Avatar>H</Avatar>
          </Toolbar>
        </AppBar>

        <main className={classes.main}>{children}</main>
        <footer className={classes.footer}>
          <Copyright />
        </footer>
      </div>
    </div>
  )
}

export default withStyles(styles)(Paperbase)
