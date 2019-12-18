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
    // container: {
    //   display: 'flex',
    //   flexWrap: 'wrap',
    // },
  }));



export default function Weight(props) {
    const classes = useStyles()

    let [newWeight, setNewWeight] = useState('')

    let handleWeightChange = evt => {
        setNewWeight(evt.target.value)
    }

    let handleClick = evt => {
        // console.log(newWeight)
        fetch(`https://peaceful-atoll-14531.herokuapp.com/users/${props.user.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type':'application/json',
                'Accept': 'application/json' 
            },
            body: JSON.stringify({
                user: {
                    weight: newWeight
                }
            })
        })
        .then(res => res.json())
        .then(resp => {
            console.log(resp)

            props.setUser(resp.user)
            props.routerProps.history.push('./home')
        })
    }




    return (
        <div className={classes.root}>
        <Navigation />

        <Grid container spacing={3}>
            <Grid item xs={12}>
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
