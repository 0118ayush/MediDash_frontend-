import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import CardRows from "react-bootstrap/CardColumns";

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
    const { myAppointments } = this.props;
    const { currentMonthAppointments } = this.state;

    return (
      <Card>
        <br />
        <CardRows>
          <Card bg="light" style={{ width: "28rem" }}>
            <Card.Header align="center">My Upcoming Appointments</Card.Header>
            <Card.Body slign="center">
              <MyUpcomingAppointments myAppointments={myAppointments} />
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
              <DoctorAvailability />
            </Card.Body>
          </Card>
        </CardRows>
      </Card>
    );
  }
}

export default Dashboard;
