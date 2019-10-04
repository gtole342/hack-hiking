import React from "react";
import { Route } from "react-router-dom";
import Results from "./Results";
import Search from "./Search";
import Trail from "./Trail";

const Content = () => {
  return (
    <div>
      <Route exact path="/" component={Search} />
      <Route exact path="/results" component={Results} />
      <Route path="/trail/:trailId" component={Trail} />
    </div>
  );
};

export default Content;
