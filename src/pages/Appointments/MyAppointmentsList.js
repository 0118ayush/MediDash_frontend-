import React, { Component } from "react";

import Table from "react-bootstrap/Table";

class MyAppointmentList extends Component {

  render() {
    //   debugger
    return <div className="container">{
        <Table striped bordered hover>
          <thead>
            <tr align="center">
              <th>Date</th>
              <th>Start time</th>
              <th>End time</th>
              <th>Doctor</th>
              <th>Patient</th>
              <th>Condition</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.props.myAppointments.map(appointment => {
              return (
                <tr align="center">
                  <td>{appointment.date}</td>
                  <td>{appointment.from_time}</td>
                  <td>{appointment.to_time}</td>
                  <td>{appointment.doctor.first_name}</td>
                  <td>{appointment.patient.first_name}</td>
                  <td>{appointment.condition}</td>
                  <td>
                    <button>Edit</button>
                  </td>
                  <td onClick={() => this.props.deleteMyAppointment(appointment)}>🗑️</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
    }</div>;
  }
}

export default MyAppointmentList;
