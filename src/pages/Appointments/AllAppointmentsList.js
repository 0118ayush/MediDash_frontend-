import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import moment from "moment"
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
              {
                this.props.allAppointments.sort((a, b) => {
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
                        <td><img width="30px" src={appointment.doctor.profile_pic} />  {appointment.doctor.first_name + " " + appointment.doctor.last_name}</td>
                        <td><img width="30px" src={appointment.patient.profile_pic} />  {appointment.patient.first_name + " " + appointment.patient.last_name}</td>
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
