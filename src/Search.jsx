import React from "react";
import { Redirect } from "react-router-dom";
import Geocoder from "react-mapbox-gl-geocoder";
import { getTrails } from "./constants";
import axios from "axios";
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from "@material-ui/core";
import Grid from '@material-ui/core/Grid'

const mapAccess = {
  mapboxApiAccessToken: "pk.eyJ1IjoiZ3RvbGUiLCJhIjoiY2p6b2Y4cGw4MDJlYTNtbm1zc3dpd3BnciJ9.ZR0TDB4dlK-kw5DHO4qM1w",
}

const queryParams = {
  country: 'us'
}

const useStyles = makeStyles({
  search: {
    position: 'relative',
    color: 'black',
    borderRadius: '5px',
    marginLeft: 20,
    marginRight: 20,
    width: '150px',
  },
  searchIcon: {
    color: 'black',
    width: '12px',
    marginBottom: '10px',
    marginLeft: '140px',
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
  },
  input: {
    color: 'inherit',
    padding: '5px',
    width: '15%',
  },
})

const Search = () => {
  const classes = useStyles();

  const [state, setState] = React.useState({
    results: [],
    searchParams: "",
    toResults: false,
    viewport: {},
  })

  const onSelected = (viewport, item) => {
    axios.get(getTrails(item.center[1], item.center[0]))
    .then((response) => {
      setState({
        results: response.data.trails,
        toResults: true,
      })
    })
  }

  if (state.toResults === true) {
    console.log(state)
    return (
      <Redirect
        to={{
          pathname: "/results",
          state: { results: state.results }
        }}
      />
    );
  }
  else {
    return (
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <Geocoder {...mapAccess}
          onSelected={onSelected}
          viewport={state.viewport}
          hideOnSelect={true}
          queryParams={queryParams}
          placeholder="Search..."
        />
      </div>
    );
  }
};

export default Search;