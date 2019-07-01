import React, { Component } from "react";
import { Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";


// Components
import AllAppointmentsList from "./AllAppointmentsList";
import AppointmentForm from "./AppointmentForm";
import MyAppointmentsList from "./MyAppointmentsList";

class AppointmentsIndex extends Component {
 
  

  render() {
    // debugger;

    const {allAppointments, myAppointments} = this.props
    return (
      <div>
        I am the entire Appointments functionality. Render lists and Details
        from here.
        <Route
          path={`${this.props.match.url}/allappointments`}
          component={(props) => <AllAppointmentsList allAppointments={allAppointments} />}
        />
        
        <Route
          path={`${this.props.match.url}/addappointment`}
          component={<AppointmentForm />}
        />
        
        <Route
          path={`${this.props.match.url}/myappointments`}
          component={(props) => <MyAppointmentsList myAppointments={myAppointments} />}
        />
        
      </div>
    );
  }
}

export default AppointmentsIndex;
