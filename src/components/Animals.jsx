import React, {useEffect} from "react";
import axios from "axios";
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, List, ListItem } from "@material-ui/core";

import { getAnimals } from '../constants';

const Animals = (props) => {
  const [results, setResults] = React.useState([]);

  useEffect(() => {
    axios.get(getAnimals(props.latitude, props.longitude))
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
      const r = {birds, amphibians, mammals, reptiles, snailsAndSlugs, insects, malacostracans, millipedes, unknown}
      setResults(r)
    })
  }, []);
  let animalElements = []
  if (Object.keys(results).length > 0) {
    for (var animalClass in results) {
      const animals = results[animalClass].map((animal) => <ListItem key={animal.key}>{animal.species}</ListItem>);
      const panel = (
        <ExpansionPanel>
          <ExpansionPanelSummary>
            {animalClass}({results[animalClass].length})
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <List>
              {animals}
            </List>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      );
      animalElements.push(panel)
      console.log(animalElements)
    }
  }
  console.log(animalElements)
  return(
    <div>{animalElements}</div>
  );
};

export default Animals;