import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";



import Navbartop from "../../components/NavbarTop";
import Sidebar from "../../components/Sidebar"

// Pages
import Dashboard from "../Dashboard/index";
import Appointments from "../Appointments/index";
import Doctors from "../Doctors/index";
import Patients from "../Patients/index";

// APIs 
import {currentDoctorFetch, currentAppointmentsFetch, currentPatientsFetch} from "../../services/apis" 


class Home extends Component {
  

  state = {
    currentDoctor: "",
    appointments: [],
    patients: []
  }

  componentDidMount(){
    if (!this.props.currentUser) {
      this.props.history.push("/signin");
    } else {
      this.currentDoctorToState();
      this.currentAppointmentsToState();
      this.currentPatientsToState()
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
        This is the Homepage!
        <Route path="/dashboard" component={() => <Dashboard />} />
        <Route path="/appointments" component={() => <Appointments />} />
        <Route path="/doctors" component={() => <Doctors />} />
        <Route path="/patients" component={() => <Patients />} />
        <Sidebar currentDoctor={this.state.currentDoctor} />
      </div>
    );
  }
}

export default withRouter(Home);
