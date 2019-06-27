import React from "react";
import { Route } from "react-router-dom";

import Home from "../pages/Main/Home.js";
import Signin from "./Signin.js";

function App() {
  return (
    <div>
      <Route exact path="/signin" component={() => <Signin />} />
      <Route exact path="/" component={() => <Home />} />
    </div>
  );
}

export default App;

// Gotta have Route between Signin and Homepage depending on if the ID exists.
