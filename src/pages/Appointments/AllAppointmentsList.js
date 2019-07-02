import React, { Component } from "react";
import Table from "react-bootstrap/Table";

//Components


class AllAppointmentsList extends Component {
  render() {
    return (
      <div className="container">
        {
          <Table striped bordered hover>
            <thead>
              <tr align="center">
                <th>Date</th>
                <th>Start time</th>
                <th>End time</th>
                <th>Doctor</th>
                <th>Patient</th>
                <th>Condtion</th>

              </tr>
            </thead>
            <tbody>
              {this.props.allAppointments.map(appointment => {
                return(
                  <tr align="center">
                    <td>{appointment.date}</td>
                    <td>{appointment.from_time}</td>
                    <td>{appointment.to_time}</td>
                    <td><img height="30px" src={appointment.doctor.profile_pic} />  {appointment.doctor.first_name}</td>
                    <td>{appointment.patient.first_name}</td>
                    <td>{appointment.condition}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        }
      </div>
    );
  }
}

export default AllAppointmentsList;
