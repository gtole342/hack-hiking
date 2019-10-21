import React, { useEffect } from "react";
import axios from "axios";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Map from "../../Map";
import { makeStyles } from '@material-ui/styles'
import Animals from '../Animals';
import Grid from '@material-ui/core/Grid'

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
  },
  return: {
    color: 'gray',
    paddingLeft: '500px',
  },
  main: {
      paddingRight: '50px',
  },
  additionalImages: {
      padding: '10px',
  },
  moreImages: {
      paddingLeft: '490px',
  },
  resultsDetails: {
      color: '#43304C',
  },
  title: {
      fontSize: '24px',
  },
  tripDetails: {
    paddingTop: '15px',
    color: "#43304C",
  }
})

const Trail = (props) => {
  const classes = useStyles();
  console.log(props)
  const [results, setResults] = React.useState([]);

  return(
    <div>
      <p className={classes.return} > ← Return to search results</p>
      <Grid container direction="row" justify="center" alignItems="stretch" color="#43304C">
            <div className={classes.main}>
              <Grid container direction="column">
                <div>
                  <img src={props.location.state.trail.imgSmallMed} alt={props.location.state.trail.name}/>
                </div>
                <div className={classes.tripDetails}>
                  <Typography variant="h5">Trip Details:</Typography>
                  <Typography>➢ Distance: {props.location.state.trail.length} miles</Typography>
                  <Typography>➢ Ascent: {props.location.state.trail.ascent}'</Typography>
                  <Typography>➢ Descent: {props.location.state.trail.descent}'</Typography>
                  <Typography>➢ High: {props.location.state.trail.high}'</Typography>
                  <Typography>➢ Low: {props.location.state.trail.low}'</Typography>
                </div>
              </Grid>
            </div>
            <div className={classes.resultsDetails} item xs>
                <Typography variant="h4">{props.location.state.trail.name}</Typography>
                <Typography>Location: {props.location.state.trail.location}</Typography>
                <Typography>Rating: {props.location.state.trail.stars}</Typography>
                <Typography>{props.location.state.trail.summary}</Typography>
            </div>
      </Grid>
    </div>
  );
};

export default Trail;
