import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import Table from "react-bootstrap/Table";

// import Doctor from "./Doctor"
import DoctorShow from "../Doctors/DoctorShow";

class AllDoctorList extends Component {
  render() {
    // debugger
    const { allDoctors } = this.props;
    return (
      <div>

        <div className="container">
          {
            <Table striped bordered hover>
              <thead>
                <tr align="center">
                  <th>Profile pic</th>
                  <th>Name</th>
                  <th>Specialty</th>
                  <th>Email</th>
                  <th>Mobile</th>
                </tr>
              </thead>
              <tbody>
                {allDoctors.map(doctor => {
                  return (
                    <tr align="center">
                      <Link to={`/home/doctors/alldoctors/${doctor.id}`}>
                        <td>
                          <img height="30px" src={doctor.profile_pic} />
                        </td>
                      </Link>
                      <td>
                        {doctor.first_name} {doctor.last_name}
                      </td>
                      <td>{doctor.specialty}</td>
                      <td>{doctor.email}</td>
                      <td>{doctor.mobile}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          }
        </div>
        ;
      </div>
    );
  }
}

export default AllDoctorList;
