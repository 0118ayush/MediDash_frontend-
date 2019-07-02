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
  fetchAllAppointments,
  deleteAppointmentBackend,
  fetchAllPatients,
  fetchAllDoctors
} from "../../services/apis";

class Home extends Component {
  state = {
    currentDoctor: "",
    myAppointments: [],
    myPatients: [],
    allAppointments: [],
    allPatients: [],
    allDoctors: []
  };

  componentDidMount() {
    if (!this.props.currentUser) {
      this.props.history.push("/signin");
    } else {
      this.allAppointmentsToState();
      this.myAppointmentsToState();
      this.currentDoctorToState();
      this.myPatientsToState();
      this.allPatientsToState();
      this.allDoctorsToState();
    }
  }

  allDoctorsToState = () => {
    fetchAllDoctors().then(doctors =>
      this.setState({
        allDoctors: doctors
      })
    );
  };

  allPatientsToState = () => {
    fetchAllPatients().then(patients =>
      this.setState({
        allPatients: patients
      })
    );
  };

  allAppointmentsToState = () => {
    fetchAllAppointments().then(appointments =>
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

  myAppointmentsToState = () => {
    currentAppointmentsFetch().then(appointments =>
      this.setState({
        myAppointments: appointments
      })
    );
  };

  myPatientsToState = () => {
    currentPatientsFetch().then(patients =>
      this.setState({
        myPatients: patients
      })
    );
  };

  deleteMyAppointmentFrontend = deletedAppointment => {
    const remainingAppointments = this.state.myAppointments.filter(
      appointment => appointment.id !== deletedAppointment.id
    );
    this.setState({
      myAppointments: remainingAppointments
    });
    deleteAppointmentBackend(deletedAppointment);
  };

  render() {
    const {
      allAppointments,
      currentDoctor,
      myAppointments,
      allPatients,
      allDoctors, 
      myPatients
    } = this.state;
    const { deleteMyAppointmentFrontend } = this;
    return (
      <div>
        This is the Homepage!
        <Route
          path={`${this.props.match.url}/appointments`}
          component={props => (
            <Appointments
              {...props}
              allAppointments={allAppointments}
              myAppointments={myAppointments}
              deleteMyAppointment={deleteMyAppointmentFrontend}
              allPatients={allPatients}
            />
          )}
        />
        <Route path="/dashboard" component={Dashboard} />
        <Route
          path={`${this.props.match.url}/doctors`}
          component={props => <Doctors {...props} allDoctors={allDoctors} />}
        />
        <Route path={`${this.props.match.url}/patients`} component={props => <Patients {...props} allPatients={allPatients} myPatients={myPatients}/>} />
        <Sidebar currentDoctor={currentDoctor} />
      </div>
    );
  }
}

export default withRouter(Home);
