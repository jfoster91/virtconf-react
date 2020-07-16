import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';

// Assets
import whyText from '../assets/why_text_main.svg';
import teamsLogo from '../assets/teamsLogo.png';
import zoomLogo from '../assets/zoomLogo.png';
import hangoutsLogo from '../assets/hangoutsLogo.png';

const useStyles = makeStyles(theme => ({
    
    titleContainer: {
        width: "100%",
        [theme.breakpoints.up("md")]: {
            alignSelf: "center"
        }
    },
    title: {
        textAlign: 'center',
        alignItems: 'center',
        fontWeight: 600,
        [theme.breakpoints.up("lg")]: {
            fontSize: '4em'
        }
    },
    whySection: {
        padding: "10% 5%"  
    },
    textContainer: {
        alignSelf: 'center'
    },
    text: {
        maxWidth: '100%'
    },
    logos: {
        display: 'flex',
        justifyContent: 'center'
    },
    logoIcon: {
        maxWidth: '10%',
        margin: 30
    }   
}));


const Why = () => {

    const classes = useStyles();

    return (
        <React.Fragment>
            <Grid container className={classes.whySection}>
                <Grid item md={6} className={classes.titleContainer}>
                    <Typography className={classes.title} variant="h4">
                        Why not Zoom, <br /> Teams, <br />  or Hangouts?
                    </Typography>
                    <div className={classes.logos}>
                        <img className={classes.logoIcon} src={teamsLogo} />
                        <img className={classes.logoIcon} src={zoomLogo} />
                        <img className={classes.logoIcon} src={hangoutsLogo} />
                    </div>
                </Grid>
                <Grid item md={6} className={classes.textContainer}>
                    <div className={classes.textBox}>
                        {/*<Typography className={classes.text}>
                        These tools are great for hosting pub quizes, virtual work drinks, team 
                        meetings and calling your Grandparents. <br /> <br />You can also attend virtual events on 
                        these platforms too and they're fine. But just fine. What we want to do is build something which 
                        actually emulates the value of going to a real event. <br /> <br /> We don't believe that people only 
                        attend events to hear the content. Most want to meet, greet and share ideas with other attendees to
                        grow their network and learn from others in their industry.
                            </Typography> */}
                        <img className={classes.text} src={whyText} />
                    </div>
                </Grid>
            </Grid>      
        </React.Fragment>
    )
}

export default Why;