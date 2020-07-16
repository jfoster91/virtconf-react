import React from 'react';
import {Avatar, Button, TextField, FormControlLabel, Checkbox, Link, Paper, Grid, Typography} from '@material-ui/core';
import EventIcon from '@material-ui/icons/Event';
import { makeStyles } from '@material-ui/core/styles';

// Assets
import constructionIcon from '../assets/construction_icon.png'

const useStyles = makeStyles((theme) => ({
  image: {
    backgroundColor: theme.palette.primary.dark
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingRight: '5%',
    paddingLeft: '5%'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', 
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  constructionIcon: {
    width: '10%',
    display: 'block',
    margin: '10% auto',
    [theme.breakpoints.up('sm')]: {
      width: '20%',
      marginTop: '30%'
    },
    [theme.breakpoints.up('md')]: {
      marginTop: '20%'
    },
    [theme.breakpoints.up('lg')]: {
      marginTop: '10%',
      width: '15%'
    }
  },
  text: {
    maxWidth: '75%',
    display: 'block',
    margin: '10% auto'
  },
  contactText: {
    textAlign: 'center',
    color: 'white',
    paddingLeft: '10%',
    paddingRight: '15%',
    paddingBottom: '10%',

    [theme.breakpoints.up("sm")]: {
        marginTop: '15%'
    },

    [theme.breakpoints.up('md')]: {
      fontSize: '2em',
      marginTop: '10%'
    }
  


  }
}));

export default function Contact() {
  const classes = useStyles();

  return (
    <Grid container component="main">
      <Grid item xs={false} sm={4} md={7} className={classes.image}>
        <img src={constructionIcon} className={classes.constructionIcon} />
        <Typography variant="h6" className={classes.contactText}>We are currently building functionality that will enable you to create your own events. In the meantime, if you wish to create an event then we can do that for you. Please fill in the form.</Typography>
      </Grid>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <EventIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Tell us a bit more about your online event.
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="first-name"
              label="First Name"
              name="email"
              autoComplete="given-name"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="last-name"
              label="Last Name"
              name="email"
              autoComplete="family-name"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Describe your event"
              name="email"
              autoComplete="email"
              autoFocus
              multiline
              rows="6"
            />
            <TextField
              id="datetime-local"
              label="Date/Time"
              type="datetime-local"
              defaultValue="2020-07-16T09:30"
              className={classes.textField}
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <br /> <br />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Subscribe to our feed"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Go
            </Button>       
          </form>
        </div>
      </Grid>
    </Grid>
  );
}