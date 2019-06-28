import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";

// APIs
import { validate } from "../services/apis";

// Components
import NavbarTop from "./NavbarTop";

// Pages
import Home from "../pages/Main/Home.js";
import Signin from "./Signin.js";
import Dashboard from "../pages/Dashboard/index";
import Appointments from "../pages/Appointments/index";
import Doctors from "../pages/Doctors/index";
import Patients from "../pages/Patients/index";

// Functions
import {currentDoctorFetch, currentAppointmentsFetch, currentPatientsFetch} from "../services/apis"


class App extends Component {
  state = {
    currentUser: null, 
    currentDoctor: null,
    appointments: [], 
    patients: []
  };

  signin = user => {
    this.setState({
      currentUser: user
    });
    localStorage.setItem("token", user.token);
    this.props.history.push("/");
  };

  signout = () => {
    this.setState({
      currentUser: ""
    });
    localStorage.removeItem("token");
    this.props.history.push("/signin");
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

  currentDoctorToState = () => {
    currentDoctorFetch().then(doctor =>
      this.setState({
        currentDoctor: doctor
      })
    );
  };

  currentAppointmentsToState = () => {
    currentAppointmentsFetch().then(appointments =>
      this.setState({
        appointments
      })
    );
  };

  currentPatientsToState = () => {
    currentPatientsFetch().then(patients => this.setState({
        patients
    }))
  }

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
          exact
          path="/"
          component={props => (
            <Home 
            currentUser={this.state.currentUser} 
            currentDoctorToState={this.currentDoctorToState} 
            currentAppointmentsToState={this.currentAppointmentsToState} 
            currentPatientsToState={this.currentPatientsToState} 
            {...props} />
          )}
        />

        <Route exact path="/dashboard" component={() => <Dashboard />} />
        <Route path="/appointments" component={() => <Appointments />} />
        <Route exact path="/doctors" component={() => <Doctors />} />
        <Route exact path="/patients" component={() => <Patients />} />
      </div>
    );
  }
}

export default withRouter(App);

// Gotta have Route between Signin and Homepage depending on if the ID exists.
