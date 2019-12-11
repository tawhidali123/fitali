import React, {useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Navigation from './Navigation'


const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.primary,
      fontSize: '4vh'
    },
}));



export default function Home(props) {
    const classes = useStyles();


    return (
        <div >
            <Navigation/>
            
            <Grid container spacing={3} style={{padding: '50px'}}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>Welcome, {props.user.username}</Paper>
                </Grid>

                <Grid item xs={12}>
                    <Paper className={classes.paper}>Current weight: {props.user.weight}</Paper>
                </Grid>

                <Grid item xs={6}>
                    <Paper className={classes.paper}>Current Goal: {props.user.goal.desire}</Paper>
                </Grid>

                <Grid item xs={6}>
                    <Paper className={classes.paper}>Current Sport: {props.user.sport.name}</Paper>
                </Grid>
            </Grid>
        </div>
    )
}
