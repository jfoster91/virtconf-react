import React from 'react';
import { Grid, Typography } from '@material-ui/core/';
import { makeStyles, useTheme } from '@material-ui/core/styles';

// Assets
import quote from '../assets/quote.svg';

const useStyles = makeStyles(theme => ({
    quoteText: {
        textAlign: 'center',
        fontWeight: 600,
        [theme.breakpoints.up("md")]: {
            fontSize: '2em'
        },
        [theme.breakpoints.up("lg")]: {
            fontSize: '2.5em'
        }
    },
    quoteSection: {
        backgroundColor: '#f0f0f0',
        paddingLeft: '5%',
        paddingRight: '5%',
        paddingBottom: "10%"
        
    },
    quoteMark: {
        height: 150,
        width: 150,
        margin: "10% auto",
        [theme.breakpoints.up("md")]: {
            marginBottom: "5%"
        }
    }
}));


const Quote = () => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Grid container className={classes.quoteSection}>
                <img src={quote} className={classes.quoteMark} />
                <Typography className={classes.quoteText} variant="h6">It's almost like ChatRoulette grew up, got forced through college, and then had a child with GoToMeeting </Typography>
            </Grid>
        </React.Fragment>
    )
}

export default Quote;