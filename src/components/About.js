import React from 'react';
import { Grid, Card, CardContent, Typography } from '@material-ui/core/';
import { makeStyles, useTheme } from '@material-ui/core/styles';

// Assets
import laptopSpeed from '../assets/laptop-speed.png';
import laptopWebinar from '../assets/laptop-webinar.png'

const useStyles = makeStyles(theme => ({
    title: {
        backgroundColor: theme.palette.primary.dark,
        textAlign: 'center',
        paddingTop: '10%',
        color: 'white',
        fontWeight: 600,
        [theme.breakpoints.up("sm")]: {
            fontSize: '3em'
        },
        [theme.breakpoints.up("md")]: {
            paddingTop: '20%',
            fontSize: '3.5em'
        }
    },
    aboutSection: {
        paddingTop: "10%",
        paddingLeft: "5%",
        paddingRight: "5%",
        paddingBottom: '10%',
        backgroundColor: theme.palette.primary.dark
    },
    card: {
        backgroundColor: 'white',
        border: 'none',
        color: 'black',
        margin: "5% 0",
        [theme.breakpoints.up("md")]: {
            margin: "0 5%"
        }   
    },
    cardImg: {
        width: "80%",
        display: 'block',
        margin: '0 auto'
    },
    cardHeading: {
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: "5%"
    },
    cardDescription: {
        marginTop: "5%",
        fontSize: "1.5em",
        textAlign: "center",
        fontWeight: 400
    }
}));


const About = () => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Typography className={classes.title} variant="h4">Use VirtConf to...</Typography>
            <Grid container className={classes.aboutSection}>
                <Grid item md={6}>
                    <Card raised="false" className={classes.card}>
                        <CardContent>
                            <Typography variant="h5" className={classes.cardHeading}>Attend thought provoking <br />events.</Typography>
                            <img className={classes.cardImg} src={laptopWebinar} />
                            <Typography className={classes.cardDescription}>Join virtual, online events through VirtConf and soak up the latest insights and content from your industry or group.</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item md={6}>
                    <Card raised="false" className={classes.card}>
                        <CardContent>
                            <Typography variant="h5" className={classes.cardHeading}>Speed network with fellow event<br /> participants.</Typography>                          
                            <img className={classes.cardImg} src={laptopSpeed} />                          
                            <Typography className={classes.cardDescription}>Afterwards, enjoy the opportunity to discuss with your fellow partipants one to one. Just like a real event...</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default About;