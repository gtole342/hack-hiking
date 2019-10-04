import React from "react";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const Results = (props) =>{
  const trails = props.location.state.results.map((trail) => {
    return(
      <Card>
          <CardMedia image={trail.imgSqSmall} 
                     title={trail.name} 
                     key={trail.id} 
          />
        <CardContent>
          <Typography variant="h3">{trail.name}</Typography>
          <Typography variant="h5">{trail.location}</Typography>
          <Typography variant="h5">{trail.stars}</Typography>
          <Typography variant="h5">{trail.difficulty}</Typography>
          <Link to=
            {{
              pathname: `/trail/${trail.id}`,
              state: { trail: trail}
              }}
          >
            See Trail
          </Link>
        </CardContent>
      </Card>
    );
  })

  return(
    <div>
      {trails}
    </div>
  );
}

export default Results;
