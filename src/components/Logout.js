import React from 'react'
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
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
}));



export default function Logout(props) {
    const classes = useStyles();

    const handleClick = () => {
        props.clearStorage()
    }



    return (
        <div>
            
            <div>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                    Thanks for visiting, come back and do some new workouts!
                    <Button 
                    color="primary"
                    onClick={handleClick}
                    >
                        <Link to='/login'>Log Back In</Link>
                    </Button>
                    </Paper>

                </Grid>

                
            </div>
        </div>
    )
}
