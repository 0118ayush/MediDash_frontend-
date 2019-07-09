import React, { Component } from "react";
import moment from "moment";
import Table from "react-bootstrap/Table";

import { fetchTodaysAppointments } from "../../services/apis";

class DoctorAvailability extends Component {
  state = {
    todaysAppointments: []
  };

  componentDidMount() {
    fetchTodaysAppointments().then(appointments =>
      this.setState({
        todaysAppointments: appointments
      })
    );
  }

  render() {
    return (
      <div>
        <Table striped bordered hover>
          <thead>
            <tr align="center">
              <th>Doctor</th>
              <th>Availability</th>
              <th>Start time</th>
              <th>End time</th>
              <th>Patient</th>
            </tr>
          </thead>
          <tbody>
            {this.state.todaysAppointments.map(appointment => {
              return (
                <tr align="center">
                  <td>{appointment.doctor.first_name}</td>
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default DoctorAvailability;
