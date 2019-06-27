import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import Home from "../pages/Main/Home.js";
import Signin from "./Signin.js";

class App extends Component {

  state ={ 
    currentUser: ""
  }


  signin = data => {
    this.setState({
      currentUser: data
    })
    this.props.history.push("/homepage")
  }


  render() {
    return (
      <div>
        <Switch>
          <Route path="/signin" component={(props) => <Signin signin={this.signin} />} />
          <Route path="/homepage" component={() => <Home />} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);

// Gotta have Route between Signin and Homepage depending on if the ID exists.
