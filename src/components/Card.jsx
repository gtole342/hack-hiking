import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  image:{
    borderRadius: '50%',
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
    <div trail={props.trail.id}>
      <img src={props.trail.imgSqSmall} 
           alt={props.trail.name}
           className={classes.image}
      />
      <div>
        <Typography variant="h3">{props.trail.name}</Typography>
        <Typography variant="h5">{props.trail.location}</Typography>
        <Typography variant="h5">{props.trail.stars}</Typography>
        <Typography variant="h5">{props.trail.difficulty}</Typography>
      </div>
    </div>
  );
}