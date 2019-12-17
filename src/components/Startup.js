import React, {useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';


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



export default function Startup(props) {
    const classes = useStyles();


    return (
        <div>          
            <Grid container spacing={3} style={{padding: '50px'}}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>Welcome, to fitali</Paper>
                </Grid>

                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Button variant="contained" 
                        color="secondary"
                        >
                            <Link to='/Register'>Register Me Up</Link>
                        </Button>

                        <Button variant="contained" 
                        color="primary"
                        >
                            <Link to='/login'>Login</Link>
                        </Button>
                    </Paper>
                </Grid>

            </Grid>
        </div>
    )
}

