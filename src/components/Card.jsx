import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image:{
    width: '200px',
    height: '200px',
    clipPath: 'circle()',
  },
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard(props) {
  const classes = useStyles();

  return (
    <Grid item xs={4} className={classes.container}>
      <Link to={{
        pathname: `/trail/${props.trail.id}`,
        state: {trail: props.trail}}}
        style={{ textDecoration: 'none'}}>
        <div trail={props.trail.id}>
          <img src={props.trail.imgMedium} 
              alt={props.trail.name}
              className={classes.image}
          />
          <div>
            <Typography>{props.trail.name}</Typography>
            <Typography>{props.trail.location}</Typography>
            <Typography>{props.trail.stars}</Typography>
            <Typography>{props.trail.difficulty}</Typography>
          </div>
        </div>
      </Link>
    </Grid>
  );
}