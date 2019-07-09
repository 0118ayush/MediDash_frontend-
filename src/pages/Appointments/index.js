import React, { Component } from "react";
import { Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

// Components
import AllAppointmentsList from "./AllAppointmentsList";
import AppointmentForm from "./AppointmentForm";
import MyAppointmentsList from "./MyAppointmentsList";

class AppointmentsIndex extends Component {
  render() {
    const {
      allAppointments,
      myAppointments,
      deleteMyAppointment,
      allPatients,
      currentDoctor,
      addNewAppointment
    } = this.props;
    return (
      <div>
        <Route
          path={`${this.props.match.url}/allappointments`}
          component={props => (
            <AllAppointmentsList allAppointments={allAppointments} />
          )}
        />
        {myAppointments.length > 0 ? (
          <Route
            path={`${this.props.match.url}/myappointments`}
            component={props => (
              <MyAppointmentsList
                myAppointments={myAppointments}
                deleteMyAppointment={deleteMyAppointment}
              />
            )}
          />
        ) : (
          <div>Loading your appointments...</div>
        )}
        )} />
        <Route
          path={`${this.props.match.url}/addappointment`}
          component={props => (
            <AppointmentForm
              allPatients={allPatients}
              currentDoctor={currentDoctor}
              addNewAppointment={addNewAppointment}
            />
          )}
        />
      </div>
    );
  }
}

export default AppointmentsIndex;
