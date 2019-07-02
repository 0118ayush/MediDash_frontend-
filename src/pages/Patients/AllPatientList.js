import React, { Component } from 'react';
import Table from "react-bootstrap/Table"

class AllPatientList extends Component {
    render() {
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

              </tr>
            </thead>
            <tbody>
              {this.props.allPatients.map(patient => {
                return(
                  <tr align="center">
                    <td><img height="30px" src={patient.profile_pic} /></td>
                    <td>{patient.first_name} {patient.last_name}</td>
                    <td>{patient.age}</td>
                    <td>{patient.email}</td>
                    <td>{patient.mobile}</td>
                    <td>{patient.appointments.length}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
            </div>
        );
    }
}

export default AllPatientList;