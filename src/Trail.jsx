import React, { useEffect } from "react";
import axios from "axios";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Map from "./Map";
import { getAnimals } from "./constants";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, List, ListItem } from "@material-ui/core";

const Trail = (props) => {
  const [results, setResults] = React.useState([]);

  useEffect(() => {
    console.log(props)
    console.log(getAnimals(props.location.state.trail.latitude, props.location.state.trail.longitude))
    axios.get(getAnimals(props.location.state.trail.latitude, props.location.state.trail.longitude))
    .then((response) =>{
      const animals = []
      const birds = []
      const amphibians = []
      const mammals = []
      const reptiles = []
      const snailsAndSlugs = []
      const insects = []
      const malacostracans = []
      const millipedes = []
      const unknown = []
      response.data.results.map((result) => {
        if (!animals.includes(result.species)) {
          animals.push(result.species)
          if (result.classKey === 212) {
            birds.push(result)
          }
          else if (result.classKey === 131){
            amphibians.push(result)
          }
          else if (result.classKey ===359) {
            mammals.push(result)
          }
          else if (result.classKey ===358) {
            reptiles.push(result)
          }
          else if (result.classKey ===225) {
            snailsAndSlugs.push(result)
          }
          else if (result.classKey ===216) {
            insects.push(result)
          }
          else if (result.classKey ===229) {
            malacostracans.push(result)
          }
          else if (result.classKey ===361) {
            millipedes.push(result)
          }
          else {
            unknown.push(result)
          }
        }
      });
      const r = [birds, amphibians, mammals, reptiles, snailsAndSlugs, insects, malacostracans, millipedes, unknown]
      setResults(r)
    })
  }, []);
  let animalElements = []
  if (results.length > 0) {
    console.log(results)
    animalElements = results.map((result) => {
      const animals = result.map((animal, i) => <ListItem key={animal.key}>{animal.species}</ListItem>)
      return(
        <List>
          {animals}
        </List>
      )
    })
  }
  return(
    <div>
      <img src={props.location.state.trail.imgSmallMed} 
           alt={props.location.state.trail.name}
      />
      <Card>
        <CardMedia>
          <Map latitude={props.location.state.trail.latitude}
              longitude={props.location.state.trail.longitude}
          />
        </CardMedia>
        <CardContent>
            <Typography>{props.location.state.trail.name}</Typography>
            <Typography>Rating: {props.location.state.trail.stars}</Typography>
            <Typography>{props.location.state.trail.length} miles</Typography>
            <Typography>{props.location.state.trail.summary}</Typography>
            <Typography>Ascent: {props.location.state.trail.ascent}'</Typography>
            <Typography>Descent: {props.location.state.trail.descent}'</Typography>
            <Typography>High: {props.location.state.trail.high}'</Typography>
            <Typography>Low: {props.location.state.trail.low}'</Typography>
        </CardContent>
      </Card>
      <div>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
          >
            Birds
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
              {animalElements[2]}
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    </div>
  );
};

export default Trail;
