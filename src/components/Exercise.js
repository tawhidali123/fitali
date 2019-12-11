import React, { useEffect, useState } from 'react';
import Navigation from './Navigation'
import ExerciseCard from './ExerciseCard'

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
    menu: {
      width: 200,
    },
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
}));



export default function Exercise(props) {
    const classes = useStyles();


  return (
    <div style={{paddingLeft: '15px'}}>
        <Navigation />  

        <Grid item xs={12}>
            <Paper className={classes.paper}>Exercises</Paper>
        </Grid>

        <div style={{'textAlign': "center"}} >
            {
                
                     props.routine.exercises.map((workout) => {
                        return <ExerciseCard exercise={workout} />
                    })
                
            }
                
        </div>
    </div>


  );
}
