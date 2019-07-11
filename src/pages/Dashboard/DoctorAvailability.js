import React, { Component } from "react";
import moment from "moment";
import Table from "react-bootstrap/Table";


class DoctorAvailability extends Component {


  // unavailableDoctors = () => {
  //   if (this.props.allDoctors.length > 0) {
  //     const unavailableDocs = this.props.allDoctors.filter(doctor => doctor.current_appointment !== null)
  //     return unavailableDocs
  //   } else {
  //     return []
  //   }
  // }

  // availableDoctors = () => {
  //   if (this.props.allDoctors.length > 0) {
  //     const availableDocs = this.props.allDoctors.filter(doctor => doctor.current_appointment === null)
  //     return availableDocs
  //   } else {
  //     return []
  //   }

  // }

  getUnavailableDocPatient = (doctor) => {
    return doctor.patients.find(patient => patient.id === doctor.current_appointment.patient_id)
  }


  render() {

    return (
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Doctor</th>
              <th>Availability</th>
              <th>Start time</th>
              <th>End time</th>
              <th>Patient</th>
            </tr>
          </thead>
          <tbody>
            {this.props.availableDoctors().map(doctor => {
              return (
                <tr align="center">
                  <td>{<img src={doctor.profile_pic} width="30px" />} <br />  Dr {doctor.last_name}</td>
                  <td>✔</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              );
            })}

            {
              this.props.unavailableDoctors().map(doctor => {

                return (
                  <tr align="center">
                    <td>{<img src={doctor.profile_pic} width="30px" />} <br />  Dr {doctor.last_name}</td>
                    <td>✖</td>
                    <td>{moment(doctor.current_appointment.from_time).format("hh:mm a")}</td>
                    <td>{moment(doctor.current_appointment.to_time).format("hh:mm a")}</td>
                    <td><img src={this.getUnavailableDocPatient(doctor).profile_pic} width="30px" /> <br /> {this.getUnavailableDocPatient(doctor).first_name} {this.getUnavailableDocPatient(doctor).last_name}</td>
                  </tr>
                );
              })
            }
          </tbody>
        </Table>
      </div>
    );
  }
}

export default DoctorAvailability;
