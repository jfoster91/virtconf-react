import React from 'react';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import logo from '../assets/logo-stacked.png';
import heroImg from '../assets/header-backdrop.png'


const useStyles = makeStyles(theme => ({
    root: {
        ...theme.typography
    },
    heroGrid: {
        padding: "0 5%",
        backgroundColor: 'white',
        [theme.breakpoints.up("md")]: {
            paddingTop: "5%"
        }
       
    },
    logoContainer: {
        width: "13em",
        margin: "10% auto 0 auto"
    },
    logo: {
        width: "100%"
    },
    heroInfoContainer: {
        margin: "0 auto",
        [theme.breakpoints.up("md")]: {
            margin: "auto"
        }
    },
    heading: {
        textAlign: "center",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "1.5em",
        padding: "0 5% 5% 5%",
        margin: 0,
        [theme.breakpoints.up("md")]: {
            textAlign: "left",
            fontSize: "1.9em"
        },
        [theme.breakpoints.up("lg")]: {
            fontSize: "2.5em"
        }
    },
    button: {
        backgroundColor: theme.palette.primary.main,
        color: "white",
        fontWeight: 800,
        margin: "5% auto",
        display: "block",
        [theme.breakpoints.up("md")]: {
            marginLeft: "5%",
            height: 50,
            width: 200
        },
        [theme.breakpoints.up("lg")]: {
            height: 50,
            
        }

    },
    heroImgContainer: {
        marginTop: "10%",
        [theme.breakpoints.up("sm")]: {
            width: "50vw",
            margin: "auto"
        }
    },
    heroImg: {
        maxWidth: "100%",
        display: "block",
        
        
    }
}));


const Hero = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("sm"));
    const classes = useStyles();

    return (
        <React.Fragment>
            {/*<HeroInfo />     {/* On small screens render these two components on top of one another. On larger screens put them next to each other */}
            {/*<HeroImg /> */} 
            {/*<Grid container direction={matches ? "column" : 'row'}>*/}
            <Grid container direction="row" className={classes.heroGrid}>
                <Grid item md={6} className={classes.heroInfoContainer}>
                    <Hidden mdUp>
                        <div className={classes.logoContainer}>
                            <img className={classes.logo} src={logo} alt="logo" />
                        </div>
                    </Hidden>
                    <h1 className={classes.heading}>High quality event networking from your couch.</h1>
                    <Button className={classes.button}>Join a Meeting</Button>
                </Grid>
                <Grid item md={6} className={classes.heroImgContainer}>
                        <img className={classes.heroImg} src={heroImg} alt="A happy networker" />
                </Grid>


            </Grid>
            
        </React.Fragment>
    )
}

export default Hero;