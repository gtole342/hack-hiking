import React, { useEffect } from "react";
import axios from "axios";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Map from "../../Map";
import { makeStyles } from '@material-ui/styles'
import Animals from '../Animals';

const useStyles = makeStyles({
  card:{
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
  trailInfo: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  }
})

const Trail = (props) => {
  const classes = useStyles();
  
  return(
    <div>
      <div>
        <img src={props.location.state.trail.imgSmallMed} 
                alt={props.location.state.trail.name}
        />
        <div>
          <Typography variant="h4">{props.location.state.trail.name}</Typography>
          <Typography>Rating: {props.location.state.trail.stars}</Typography>
          <Typography>{props.location.state.trail.summary}</Typography>
        </div>
      </div>
      <div>
        <div>
          <Typography>Trail Details</Typography>
          <Typography>{props.location.state.trail.length} miles</Typography>
          <Typography>Ascent: {props.location.state.trail.ascent}'</Typography>
          <Typography>Descent: {props.location.state.trail.descent}'</Typography>
          <Typography>High: {props.location.state.trail.high}'</Typography>
          <Typography>Low: {props.location.state.trail.low}'</Typography>
        </div>
        <div>
          <Animals latitude={props.location.state.trail.latitude}
                  longitude={props.location.state.trail.longitude}
          />
        </div>
      </div>
      <div>
        <Map latitude={props.location.state.trail.latitude}
            longitude={props.location.state.trail.longitude}
        />
      </div>
    </div>
  );
};

export default Trail;
