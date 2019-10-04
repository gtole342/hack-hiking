import React from "react";
import { Redirect } from "react-router-dom";
import Geocoder from "react-mapbox-gl-geocoder";
import { getTrails } from  "./constants";
import axios from "axios";

const mapAccess ={
  mapboxApiAccessToken:"pk.eyJ1IjoiZ3RvbGUiLCJhIjoiY2p6b2Y4cGw4MDJlYTNtbm1zc3dpd3BnciJ9.ZR0TDB4dlK-kw5DHO4qM1w",
}

const queryParams = {
  country: 'us'
}

const Search = () => {
  const [state, setState] = React.useState({
    results: [],
    searchParams: "",
    toResults: false,
    viewport: {},
  })

  const onSelected = (viewport, item) => {
    setState({viewport});
    axios.get(getTrails(item.center[1], item.center[0]))
    .then((response) => {
      setState({
        results: response.data.trails,
        toResults: true,
      })
    })
  }

  if (state.toResults === true) {
    return (
      <Redirect 
        to={{
          pathname: "/results",
          state: { results: state.results}
        }}
      />
    );
  }
  else {
    return(
      <div>
        <Geocoder {...mapAccess}
                  onSelected={onSelected}
                  viewport={state.viewport}
                  hideOnSelect={true}
                  queryParams={queryParams}
        />
      </div>
    );
  }
};

export default Search;