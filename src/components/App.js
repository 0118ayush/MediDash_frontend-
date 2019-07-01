import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";

// APIs
import { validate } from "../services/apis";

// Components
import NavbarTop from "./NavbarTop";

// Pages
import Home from "../pages/Main/Home.js";
import Signin from "./Signin.js";

class App extends Component {
  state = {
    currentUser: null
  };

  signin = user => {
    this.setState(
      {
        currentUser: user
      },
      () => {
        localStorage.setItem("token", user.token);
        this.props.history.push("/home");
      }
    );
  };

  componentDidMount() {
    if (localStorage.token) {
      validate().then(data => {
        if (data.error) {
          alert(data.error);
        } else {
          this.signin(data);
        }
      });
    }
  }

  signout = () => {
    this.setState({
      currentUser: ""
    });
    localStorage.removeItem("token");
    this.props.history.push("/signin");
  };

  render() {
    return (
      <div>
        <NavbarTop
          currentUser={this.state.currentUser}
          signout={this.signout}
        />
        <Route
          exact
          path="/signin"
          component={props => <Signin signin={this.signin} />}
        />
        <Route
          path="/home"
          component={props => (
            <Home {...props} currentUser={this.state.currentUser} />
          )}
        />
      </div>
    );
  }
}

export default withRouter(App);

// Gotta have Route between Signin and Homepage depending on if the ID exists.
