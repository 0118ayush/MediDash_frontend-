import React, { Component } from "react";
import moment from "moment";
import Table from "react-bootstrap/Table";
import { debuggerStatement, nullLiteralTypeAnnotation } from "@babel/types";

class MyUpcomingAppointments extends Component {
  render() {
    return (
      <div>
        <Table striped bordered hover>
          <thead>
            <tr align="center">
              <th>Date</th>
              <th>Start time</th>
              <th>End time</th>
              <th>Patient</th>
              <th>Condition</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.myAppointments.length > 0 ?
                (this.props.myAppointments
                  .filter(appointment => {
                    // debugger
                    // return new Date(appointment.date).toLocaleDateString() >= new Date().toLocaleDateString();
                    const fromTime = new Date(Date.parse(appointment.date + appointment.from_time.slice(10, appointment.from_time.length - 1)))
                    const timeNow = new Date(Date.parse(new Date()))
                    return fromTime > timeNow

                  })
                  // Sort via Date + Time
                  .sort((a, b) => {
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
                        <td>
                          <img width="30px" src={appointment.patient.profile_pic} />{" "}
                          {appointment.patient.first_name +
                            " " +
                            appointment.patient.last_name}
                        </td>
                        <td>{appointment.condition}</td>
                      </tr>
                    );
                  }))

                : null



            }
          </tbody>
        </Table>
      </div>
    );
  }
}

export default MyUpcomingAppointments;
