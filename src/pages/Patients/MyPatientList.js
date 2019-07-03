import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import moment from "moment";

class MyPatientList extends Component {
  render() {
    moment.locale("en-gb");

    return (
      <div className="container">
        <Table striped bordered hover>
          <thead>
            <tr align="center">
              <th>Profile</th>
              <th>Name</th>
              <th>Age</th>
              <th>Email</th>
              <th>Mobile</th>
              <th># Appointments</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {this.props.myPatients.map(patient => {
              return (
                <tr align="center">
                  <td>
                    <img height="30px" src={patient.profile_pic} />
                  </td>
                  <td>
                    {patient.first_name} {patient.last_name}
                  </td>
                  <td>{patient.age}</td>
                  <td>{patient.email}</td>
                  <td>{patient.mobile}</td>
                  <td>{patient.appointments.length}</td>
                  <td>
                    <button>Edit</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default MyPatientList;
