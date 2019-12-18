import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';




const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
    
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
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

export default function ExerciseCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
    

  return (
      <div style={{display: 'inline-block', 'padding': '20px'}}>
      
    
            <Card className={classes.card}>
                <CardHeader
                    avatar={
                    <Avatar className={classes.avatar}>
                        <FitnessCenterIcon />

                    </Avatar>
                    }
                    action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                    }
                    title={  props.exercise.name}
                    subheader={props.exercise.category}
                />
                <CardMedia
                    className={classes.media}
                    image={props.exercise.image}
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                    {props.exercise.description}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    {/* <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                    <Typography>favorites</Typography>
                    </IconButton> */}
                    
                    <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                    >
                    <Typography>instructions</Typography>
                    <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>Instructions:</Typography>
                        <Typography paragraph>
                            {props.exercise.instruction}
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
        

    </div>
  );
}