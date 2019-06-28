import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";


// import Header from "./Header.js"
import Navbartop from "../../components/NavbarTop";
import Sidebar from "../../components/Sidebar/index.js";

// Pages

class Home extends Component {
  

  

  componentDidMount() {
    if (!this.props.currentUser) {
      this.props.history.push("/signin");
    } else {
      this.props.currentDoctorToState();
      this.props.currentAppointmentsToState();
      this.props.currentPatientsToState()
    }
  }

  render() {
    return (
      <div>
        <Sidebar expandUserInfo={this.expandUserInfo} />
        This is the Homepage!
      </div>
    );
  }
}

export default Home;
