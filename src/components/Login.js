import React, { useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';


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




export default function Login(props) {
    const classes = useStyles();

    let [username, setUsername] = useState('');
    let [password, setPassword] = useState('');

    let handleUsernameChange = evt => {
        setUsername(evt.target.value)
    }

    let handlePasswordChange = evt => {
        setPassword(evt.target.value)
    }

    let handleClick = () => {
        // console.log(username, password)
        fetch('http://localhost:3000/login',{
            method: 'POST',
            headers: {
                "Content-Type": "application/json",                                                                                      
                "Accepts": "application/json"
            },
            body: JSON.stringify({
                user: {
                    'username': username,
                    'password': password
                }
            })
        })
        .then(res => res.json())
        .then(resp => {
            if(resp.user){
                console.log(resp)
                props.setUser(resp.user)
                localStorage.setItem('token', resp.jwt)
                
                props.routerProps.history.push("/home")
            }
            
        })
        .catch(err => console.log("Wrong Password or Username"))
        
    }



    return(
        <div className={classes.root}>
            <Grid container spacing={3}>

                <Grid item xs={12}>
                <Paper className={classes.paper}>Login</Paper>
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
                
                
                <Grid item xs={12}>
                    <Button variant="contained" 
                    color="primary"
                    onClick={handleClick}
                    >
                        SUBMIT
                    </Button>

                    <Button variant="contained" 
                    color="secondary"
                    >
                        <Link to='/Register'>Register Me Up</Link>
                    </Button>
                </Grid>

            </Grid>
        </div>
    )
}
