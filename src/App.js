import React,{ useState } from 'react'
import VectorTile from "@mapbox/vector-tile";
import MapGL, {GeolocateControl } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

const TOKEN="pk.eyJ1IjoiZ3RvbGUiLCJhIjoiY2p6b2Y4cGw4MDJlYTNtbm1zc3dpd3BnciJ9.ZR0TDB4dlK-kw5DHO4qM1w";

const App = () => {

  const [viewport, setViewPort ] = useState({
    width: 400,
    height: 400,
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 15
  })

  const _onViewportChange = viewport => setViewPort({...viewport, transitionDuration: 3000 })
  
  return (
      <MapGL
        {...viewport}
        mapboxApiAccessToken={TOKEN}
        mapStyle="mapbox://styles/mapbox/outdoors-v11"
        onViewportChange={_onViewportChange}
      >
      </MapGL>
  )
}

export default App;
