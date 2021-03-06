import React, { Component } from "react";
import moment from "moment"

import Table from "react-bootstrap/Table";

class MyAppointmentList extends Component {

  render() {

    return <div className="container">{
      <Table striped bordered hover>
        <thead>
          <tr align="center">
            <th>Date</th>
            <th>Start time</th>
            <th>End time</th>
            <th>Patient</th>
            <th>Condition</th>
            {/* <th>Edit</th> */}
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            this.props.myAppointments.length > 0 ?
              (
                this.props.myAppointments.sort((a, b) => {
                  const dateA = Date.parse(a.date + a.from_time.slice(10))
                  const dateB = Date.parse(b.date + b.from_time.slice(10))
                  if (dateA < dateB) return -1
                  if (dateA > dateB) return 1
                  return 0
                })

                  .map(appointment => {
                    return (
                      <tr align="center">
                        <td>{moment(appointment.date).format("DD/MM/YY")}</td>
                        <td>{moment(appointment.from_time).format("hh:mm a")}</td>
                        <td>{moment(appointment.to_time).format("hh:mm a")}</td>
                        <td><img src={appointment.patient.profile_pic} width="30px" />  {appointment.patient.first_name + " " + appointment.patient.last_name}</td>
                        <td>{appointment.condition}</td>
                        {/* <td>
                          <button>Edit</button>
                        </td> */}
                        <td onClick={() => this.props.deleteMyAppointment(appointment)}>🗑️</td>
                      </tr>
                    );
                  }
                  )
              ) : <div>Loading your appointments...</div>
          }
        </tbody>
      </Table>
    }</div>;
  }
}

export default MyAppointmentList;
