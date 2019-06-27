import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";

// Components
import NavbarTop from "./NavbarTop"

// Pages
import Home from "../pages/Main/Home.js";
import Signin from "./Signin.js";
import Dashboard from "../pages/Dashboard/index";
import Appointments from "../pages/Appointments/index";
import Doctors from "../pages/Doctors/index"
import Patients from "../pages/Patients/index";



class App extends Component {

  state = {
    currentUser: "", 
    
  };

  signin = data => {
    this.setState({
      currentUser: data
    });
    this.props.history.push("/homepage");
  };

  render() {
    return (
      <div>
        <NavbarTop currentUser={this.state.currentUser}/>
        <Route exact path="/" component={props => <Signin signin={this.signin} />}/>
        <Route exact path="/homepage" component={props => <Home currentUser={this.state.currentUser} />}/>

        <Route exact path="/dashboard" component={() => <Dashboard/>}/>
        <Route exact path="/appointments" component={() => <Appointments/>} />
        <Route exact path="/doctors" component={() => <Doctors/>} />
        <Route exact path="/patients" component={() => <Patients/>} />

      </div>
    );
  }
}

export default withRouter(App);

// Gotta have Route between Signin and Homepage depending on if the ID exists.
