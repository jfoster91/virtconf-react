import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, IconButton, Drawer, Tabs, Tab, List, ListItem, ListItemText } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import MenuIcon from '@material-ui/icons/Menu';



import { makeStyles, useTheme } from '@material-ui/core/styles';

import logo from '../assets/logo.png'


const useStyles = makeStyles(theme => ({
    strip: {
        height: 25,
        width: '100%',
        backgroundColor: 'grey'
    },
    footer: {
        height: 150,
        width: '100%'
    }
  }));


const Footer = () => {

    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <React.Fragment>
            <div className={classes.strip} />
            <div className={classes.footer}>

            </div>
        </React.Fragment>
        
    )
}



export default Footer;