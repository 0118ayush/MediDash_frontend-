import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";

import Navbartop from "../../components/NavbarTop";
import Sidebar from "../../components/Sidebar/index";

// Pages
import Dashboard from "../Dashboard/index";
import Doctors from "../Doctors/index";
import Patients from "../Patients/index";
import Appointments from "../Appointments/index";
import Profile from "../Profile/Profile";

// APIs
import {
  currentDoctorFetch,
  currentAppointmentsFetch,
  currentPatientsFetch,
  fetchAllAppointments,
  deleteAppointmentBackend,
  fetchAllPatients,
  fetchAllDoctors,
  addPatientBackend,
  addAppointmentBackend
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
      // this.props.history.push("/signin");
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

  // features and oages they on
  // tomorrow and friday
  // doctor availability
  AddNewPatientFrontend = newPatient => {
    this.setState({
      allPatients: [newPatient, ...this.state.allPatients]
    });
  };

  addNewPatient = newPatient => {
    if (
      this.state.allPatients.find(patient => patient.email === newPatient.email)
    ) {
      alert("Patient already exists.");
    } else {
      addPatientBackend(newPatient).then(patient =>
        this.AddNewPatientFrontend(patient)
      );
    }
  };

  addAppointmentFrontendAndUpdateDoctors = (newAppointment, doctors) => {
    this.setState({
      myAppointments: [newAppointment, ...this.state.myAppointments],
      allDoctors: doctors
    });
  };

  addNewAppointment = newAppointment => {
    addAppointmentBackend(newAppointment)
      .then(appointment => {
        fetchAllDoctors().then(doctors => {
          this.addAppointmentFrontendAndUpdateDoctors(appointment, doctors)
        })
      });
  }


  unavailableDoctors = () => {
    if (this.state.allDoctors.length > 0) {
      const unavailableDocs = this.state.allDoctors.filter(doctor => doctor.current_appointment !== null)
      return unavailableDocs
    } else {
      return []
    }
  }

  availableDoctors = () => {
    if (this.state.allDoctors.length > 0) {
      const availableDocs = this.state.allDoctors.filter(doctor => doctor.current_appointment === null)
      return availableDocs
    } else {
      return []
    }

  }

  render() {
    const {
      allAppointments,
      currentDoctor,
      myAppointments,
      allPatients,
      allDoctors,
      myPatients
    } = this.state;
    const {
      deleteMyAppointmentFrontend,
      addNewPatient,
      addNewAppointment,
      unavailableDoctors,
      availableDoctors
    } = this;
    return (
      <div>
        <Sidebar currentDoctor={currentDoctor} />

      {
        myAppointments.length > 0 ?
        ( <Route
          exact
          path="/home"
          render={props => <Dashboard myAppointments={myAppointments} unavailableDoctors={unavailableDoctors} availableDoctors={availableDoctors} />}
        />)
        : null
      }
       

        <Route
          path={`${this.props.match.url}/appointments`}
          render={props => (
            <Appointments
              {...props}
              allAppointments={allAppointments}
              myAppointments={myAppointments}
              deleteMyAppointment={deleteMyAppointmentFrontend}
              allPatients={allPatients}
              currentDoctor={currentDoctor}
              addNewAppointment={addNewAppointment}
            />
          )}
        />

        <Route
          path={`${this.props.match.url}/doctors`}
          render={props => <Doctors {...props} allDoctors={allDoctors} />}
        />
        <Route
          path={`${this.props.match.url}/patients`}
          render={props => (
            <Patients
              {...props}
              allPatients={allPatients}
              myPatients={myPatients}
              addNewPatient={addNewPatient}
            />
          )}
        />
        <Route
          path={`${this.props.match.url}/profile`}
          render={props => <Profile {...props} />}
        />
      </div>
    );
  }
}

export default withRouter(Home);
