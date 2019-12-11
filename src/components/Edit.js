import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

import Navigation from './Navigation'


const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.primary,
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



export default function Edit(props) {
    const classes = useStyles();

    let [sports, setSports] = useState([]);
    let [sport, setSelectedSport] = useState('')

    let [goals, setGoals] = useState([]);
    let [goal, setSelectedGoal] = useState('')

    let handleSportChange = event => {
        setSelectedSport(event.target.value);
    };

    let handleGoalChange = event => {
        setSelectedGoal(event.target.value);
    };

    let handleClick = () => {
        console.log(sport, goal)

        fetch(`http://localhost:3000/users/${props.user.id}`,{
            method: 'PATCH',
            headers: {
                'Content-Type':'application/json',
                'Accept': 'application/json' 
            },
            body: JSON.stringify({
                user: {
                    sport_id: sport,
                    goal_id: goal
                }
            
            })
        })
        .then(resp => resp.json())
        .then(resp => {
            console.log(resp)
            
            props.setUser(resp.user)
            props.routerProps.history.push("/home")
        })



    }


    useEffect(() => {

        fetch('http://localhost:3000/sports')
        .then(res => res.json())
        .then(resp =>{
            setSports(resp)
            console.log(resp)
        })
    
        fetch('http://localhost:3000/goals')
        .then(res => res.json())
        .then(resp => {
            setGoals(resp)
            console.log(resp)
        })
    
    }, [])



    
    return (
        <div className={classes.root}>
        <Navigation />
        <Grid container spacing={3}>

            <Grid item xs={12}>
            <Paper className={classes.paper}>Modify Sport or Goal</Paper>
            </Grid>

            
            <Grid item xs={6}>
            <Paper className={classes.paper}>Sport</Paper>
                <Paper>
                    <TextField
                    id="standard-select-sport"
                    select
                    label="Sport"
                    className={classes.textField}
                    value={sport}
                    onChange={handleSportChange}
                    helperText="Select the Sport you like to train for now"
                    margin="normal"
                    >
                        {sports.map((sport, index) => (
                            <MenuItem key={index} value={sport.id}>
                            {sport.name}
                            </MenuItem>
                        ))}
                    </TextField>
                </Paper>
            </Grid>

            <Grid item xs={6}>
            <Paper className={classes.paper} color="primary">Goal</Paper>
                <Paper>
                    <TextField
                    id="standard-select-goal"
                    select
                    label="Goal"
                    className={classes.textField}
                    value={goal}
                    onChange={handleGoalChange}
                    helperText="What would you like to achieve with your current weight"
                    margin="normal"
                    >
                        {goals.map((goal, index) => (
                            <MenuItem key={index} value={goal.id}>
                            {goal.desire}
                            </MenuItem>
                        ))}
                    </TextField>
                </Paper>
            </Grid>
            
            
            <Grid item xs={12}>
                <Button variant="contained" 
                color="primary"
                onClick={handleClick}
                >
                    SUBMIT
                </Button>
            </Grid>

        </Grid>
    </div>
        
    )
}
