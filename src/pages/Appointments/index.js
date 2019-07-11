import React, { Component } from "react";
import { Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

// Components
import AllAppointmentsList from "./AllAppointmentsList";
import AppointmentForm from "./AppointmentForm";
import MyAppointmentsList from "./MyAppointmentsList";


import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


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
          render={props => (
            <AllAppointmentsList allAppointments={allAppointments} />
          )}
        />

        <Container>
          <Row className="justify-content-md-center">

            <Col md="auto">
              {myAppointments.length > 0 ? (
                // <h2>My Appointments</h2>
                <Route
                  path={`${this.props.match.url}/myappointments`}
                  render={props => (
                    <MyAppointmentsList
                      myAppointments={myAppointments}
                      deleteMyAppointment={deleteMyAppointment}
                    />
                  )}
                />
              ) : (
                  <div>Loading your appointments...</div>
                )}
            </Col>
          </Row>
        </Container>




        <Route
          path={`${this.props.match.url}/addappointment`}
          render={props => (
            <AppointmentForm
              allPatients={allPatients}
              currentDoctor={currentDoctor}
              addNewAppointment={addNewAppointment}
            />
          )}
        />
      </div>
    )
  }
}

export default AppointmentsIndex;
