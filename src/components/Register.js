import React, { useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';


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



const genders = [
    {
      value: 'male',
      label: 'Male',
    },
    {
      value: 'female',
      label: 'Female',
    },
    
];




export default function Register(props) {
  const classes = useStyles();

  let [sports, setSports] = useState([]);
  let [sport, setSelectedSport] = useState('')

  let [goals, setGoals] = useState([]);
  let [goal, setSelectedGoal] = useState('')

  let [gender, setSelectedGender] = useState('')

  let [username, setUsername] = useState('')

  let [password, setPassword] = useState('')

  let [weight, setWeight] = useState('')
  


  let handleGenderChange = event => {
    setSelectedGender(event.target.value)
  };

  let handleSportChange = event => {
    setSelectedSport(event.target.value);
  };

  let handleGoalChange = event => {
    setSelectedGoal(event.target.value);
  };

  let handleUsernameChange = event => {
    setUsername(event.target.value);
  };

  let handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  let handleWeightChange = event => {
    setWeight(event.target.value);
  };



  const handleClick = () => {
      console.log(username, password, gender, weight, sport, goal)
      debugger
      fetch('http://localhost:3000/users',{
          method: 'POST',
          headers: {
            'Content-Type':'application/json',
            'Accept': 'application/json' 
          },
          body: JSON.stringify({
              user: {
                username: username,
                password: password,
                gender: gender,
                weight: weight,
                sport_id: sport,
                goal_id: goal
              }
              
          })
      })
      .then(resp => resp.json())
      .then(user => {
          props.setUser(user)
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
      <Grid container spacing={3}>

        <Grid item xs={12}>
          <Paper className={classes.paper}>Register</Paper>
        </Grid>

        
        <Grid item xs={6}>
          <Paper className={classes.paper}>Username</Paper>
          <Paper>
            <TextField
            id="outlined-search"
            label="Username"
            type="username"
            className={classes.textField}
            onChange={handleUsernameChange}
            margin="normal"
            variant="outlined"
            />
          </Paper>
        </Grid>

        <Grid item xs={6}>
          <Paper className={classes.paper}>Password</Paper>
          <Paper>
            <TextField
            id="outlined-password-input"
            label="Password"
            className={classes.textField}
            type="password"
            onChange={handlePasswordChange}
            margin="normal"
            variant="outlined"
            />
          </Paper>
        </Grid>

        <Grid item xs={6}>
          <Paper className={classes.paper}>Gender</Paper>
          <Paper>
                <TextField
                id="outlined-select-currency"
                select
                label="Gender"
                className={classes.textField}
                value={gender}
                onChange={handleGenderChange}
                helperText="Please select your Gender that you identify as"
                margin="normal"
                variant="outlined"
                >
                {genders.map((option, index) => (
                    <MenuItem key={index} value={option.value}>
                    {option.label}
                    </MenuItem>
                ))}
                </TextField>
          </Paper>
        </Grid>

        <Grid item xs={6}>
          <Paper className={classes.paper}>Weight</Paper>
          <Paper>
            <TextField
            id="outlined-number"
            label="Number"
            type="number"
            className={classes.textField}
            helperText="Enter your weight in lbs"
            onChange={handleWeightChange}
            margin="normal"
            variant="outlined"
            />
          </Paper>
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
            helperText="Select the Sport you like to train for"
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
  );
}

