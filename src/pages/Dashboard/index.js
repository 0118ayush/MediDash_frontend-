import React, { Component } from "react";


import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// APIs
import { fetchMonthlyAppointments } from "../../services/apis";

// Components
import MyUpcomingAppointments from "./MyUpcomingAppointments";
import AppointmentsOverMonth from "./AppointmentsOverMonth";
import DepartmentAppoitmentsMonth from "./DepartmentAppoitmentsMonth";
import DoctorAvailability from "./DoctorAvailability";

class Dashboard extends Component {
  state = {
    currentMonthAppointments: []
  };

  componentDidMount() {
    fetchMonthlyAppointments().then(appointments =>
      this.setState({
        currentMonthAppointments: appointments
      })
    );
  }


  render() {
    const { myAppointments, unavailableDoctors, availableDoctors } = this.props;
    const { currentMonthAppointments } = this.state;

    return (
      <div>

        <Container>
          <Row >
            <Col>
              {currentMonthAppointments.length === 0 ? (
                <div>Loading Department Appointments...</div>
              ) : (
                  <DepartmentAppoitmentsMonth
                    currentMonthAppointments={currentMonthAppointments}
                  />
                )}
            </Col>

            <Col>
              {currentMonthAppointments.length === 0 ? (
                <div>Loading Appointments...</div>
              ) : (
                  <AppointmentsOverMonth
                    currentMonthAppointments={currentMonthAppointments["All"]}
                  />
                )}
            </Col>
          </Row>
          <Row style={{ marginTop: "75px" }}>
            <Col>
              {
                (myAppointments.length === 0) ?
                  (<div>Loading your upcoming appointments...</div>)
                  : (<MyUpcomingAppointments myAppointments={myAppointments} />)
              }
            </Col>
            <Col>
              <DoctorAvailability unavailableDoctors={unavailableDoctors} availableDoctors={availableDoctors} />
            </Col>
          </Row>
        </Container>

        {/* <Card>
          <br />
          <CardRows>
            <Card bg="light" style={{ width: "28rem" }}>
              <Card.Header align="center">My Upcoming Appointments</Card.Header>
              <Card.Body slign="center">
                {
                  (myAppointments.length === 0) ?
                    (<div>Loading your upcoming appointments...</div>)
                    : (<MyUpcomingAppointments myAppointments={myAppointments} />)
                }
              </Card.Body>
            </Card>

            <Card bg="light" style={{ width: "28rem" }}>
              <Card.Header align="center">
                Total Appointments Over Month
            </Card.Header>
              <Card.Body align="center">
                {currentMonthAppointments.length === 0 ? (
                  <div>Loading Appointments...</div>
                ) : (
                    <AppointmentsOverMonth
                      currentMonthAppointments={currentMonthAppointments["All"]}
                    />
                  )}
              </Card.Body>
            </Card>
          </CardRows>

          <CardRows>
            <Card bg="light" style={{ width: "28rem" }}>
              <Card.Header align="center">
                Departmental appointments over Month
            </Card.Header>
              <Card.Body slign="center">
                {currentMonthAppointments.length === 0 ? (
                  <div>Loading Department Appointments...</div>
                ) : (
                    <DepartmentAppoitmentsMonth
                      currentMonthAppointments={currentMonthAppointments}
                    />
                  )}
              </Card.Body>
            </Card>

            <Card bg="light" style={{ width: "28rem" }}>
              <Card.Header align="center">Doctor Availability</Card.Header>
              <Card.Body align="center">


                <DoctorAvailability unavailableDoctors={unavailableDoctors} availableDoctors={availableDoctors} />


              </Card.Body>
            </Card>
          </CardRows>
        </Card> */}
      </div>
    );
  }
}

export default Dashboard;
