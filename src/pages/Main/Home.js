import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";

import Navbartop from "../../components/NavbarTop";
import Sidebar from "../../components/Sidebar";

// Pages
import Dashboard from "../Dashboard/index";
import Doctors from "../Doctors/index";
import Patients from "../Patients/index";
import Appointments from "../Appointments/index";

// APIs
import {
  currentDoctorFetch,
  currentAppointmentsFetch,
  currentPatientsFetch, 
  FetchAllAppointments
} from "../../services/apis";


class Home extends Component {
  state = {
    currentDoctor: "",
    myAppointments: [],
    patients: [], 
    allAppointments: []
  };

  componentDidMount() {
    if (!this.props.currentUser) {
      this.props.history.push("/signin");
    } else {
      this.allAppointmentsToState()
      this.currentDoctorToState();
      this.currentAppointmentsToState();
      this.currentPatientsToState();
      
    }
  }

  allAppointmentsToState = () => {
    FetchAllAppointments().then(appointments =>
      this.setState({
        allAppointments: appointments
      })
    );
  };


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
        myAppointments: appointments
      })
    );
  };

  currentPatientsToState = () => {
    currentPatientsFetch().then(patients =>
      this.setState({
        patients
      })
    );
  };

  render() {


    const {allAppointments, currentDoctor, myAppointments} = this.state
    return (
      <div>
        This is the Homepage!
        <Route
          path={`${this.props.match.url}/appointments`}
          component={props => <Appointments {...props} allAppointments={allAppointments} myAppointments={myAppointments} />}
        />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/doctors" component={Doctors} />
        <Route path="/patients" component={Patients} />
        <Sidebar currentDoctor={currentDoctor} />
      </div>
    );
  }
}

export default withRouter(Home);
