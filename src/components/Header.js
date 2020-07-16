import React, { useState, useEffect } from 'react';
import {AppBar, Toolbar,
        IconButton,
        Drawer,
        Tabs, Tab, 
        List, ListItem, ListItemText, 
        Button, 
        useMediaQuery } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles, useTheme } from '@material-ui/core/styles';

// Assets
import logo from '../assets/logo.png'

const useStyles = makeStyles(theme => ({
    
    appbar: {
      background: 'white',
      boxShadow: 'none',
      
    },
    desktopContent: {
      display: 'flex',
      width: "100%"

    },
    logo: {
      height: "5em",
    },
    logoContainer: {
      padding: "1% 5%",
      display: "flex",
    },
    logoText: {
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: "bold"
    },
    hamburgerMenuContainer: {
      marginLeft: 'auto'
    },
    drawer: {
      marginTop: 20
    },
    navigation: {
      padding: "1% 5%",
      display: 'flex',
      alignItems: 'center',
      marginLeft: 'auto'
    },
    tabContainer: {
      marginRight: 50,
      [theme.breakpoints.up("md")]: {
        marginRight: 30
      }
      
    },
    tab: {
      width: 10
      
    },
    button: {
      backgroundColor: theme.palette.primary.main,
      color: "white",
      fontWeight: 800
    }

  }));


const Header = () => {

    // Hook into styles above via classes variable
    const classes = useStyles();

    // Access mui theme so that we can setup a media query. The matches variable is just a boolean
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("sm"));

    // set up state for the Drawer - ie is it open (yes or no) and a means by which you can update state without mutating it
    const [openDrawer, setOpenDrawer] = useState(false);

    const toggleDrawer = () => {
      setOpenDrawer(!openDrawer);
    }

    const tabs = [
      {name: "About", link: "/about"},
      {name: "Why?", link: "/why"},
      {name: "Get Started", link: "/getstarted"}
    ]

    const mobileView = (
      <React.Fragment>
         <IconButton className={classes.hamburgerMenuContainer} edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer}>
            <MenuIcon />
         </IconButton>
      </React.Fragment>
    )

    const desktopView = (
      <React.Fragment>
          <div className={classes.desktopContent}>
            <div className={classes.logoContainer}>
              <img className={classes.logo} src={logo} alt="logo" />
              <h1 className="logoText">VirtConf</h1>
            </div>
            <div className={classes.navigation}>
              <Tabs className={classes.tabContainer}>
                { tabs.map((tab, index) => (
                    <Tab className={classes.tab} label={tab.name} value={index} />
                  )
                )}
              </Tabs>
              <Button className={classes.button}>Join a Meeting</Button>
            </div>
          </div>
      </React.Fragment>
    )

    return (
        <React.Fragment>
          <AppBar position="sticky" className={classes.appbar}>
            <Toolbar>
              {matches ? mobileView : desktopView}
              
            </Toolbar>
          </AppBar>
          <Drawer anchor="left" open={openDrawer} onClose={toggleDrawer} className={classes.drawer}>
              <List>
                { tabs.map((tab) => (
                    <ListItem divider button label={tab.name}>
                      <ListItemText>{tab.name}</ListItemText>
                    </ListItem>
                    )
                  )
                }
               </List>
          </Drawer>             
        </React.Fragment>
        
    )
}

export default Header;