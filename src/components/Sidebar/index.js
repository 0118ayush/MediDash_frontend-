import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Collapse } from "react-bootstrap";

import { slide as Menu } from "react-burger-menu";
import "../../assets/styles/sidebar.css";
import Image from 'react-bootstrap/Image'
import Col from 'react-bootstrap/Col'






class Sidebar extends Component {
  state = {
    appointmentsOpen: false,
    doctorsOpen: false,
    patientsOpen: false
  };

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }

  render() {
    const { location, currentDoctor } = this.props;

    return (
      <div>
        <Menu >

          <Col xs={6} md={4}>
            <Image height="200px" width="225px" src={currentDoctor.profile_pic} roundedCircle />
          </Col>

          <div align="center">Dr {currentDoctor.last_name}</div>
          <div align="center">{currentDoctor.specialty}</div>

          <ul className="nav">
            <li className={location.pathname === "/" ? "active" : null}>
              <Link to="/home">
                <p>Dashboard</p>
              </Link>
            </li>

            <li
              className={
                this.isPathActive("/appointments") ||
                  this.state.appointmentsOpen
                  ? "active"
                  : null
              }
            >
              <a
                onClick={() =>
                  this.setState({
                    appointmentsOpen: !this.state.appointmentsOpen
                  })
                }
                data-toggle="collapse"
              >
                <p> Appointments</p>
              </a>
              <Collapse in={this.state.appointmentsOpen}>
                <div>
                  <ul className="nav">
                    <li>
                      <Link to="/home/appointments/myappointments">
                        My Appointments
                      </Link>
                    </li>
                    <li>
                      <Link to="/home/appointments/allappointments">
                        All Appointments
                      </Link>
                    </li>
                    <li>
                      <Link to="/home/appointments/addappointment">
                        Add Appointment
                      </Link>
                    </li>
                  </ul>
                </div>
              </Collapse>
            </li>

            <li
              className={
                this.isPathActive("/doctors") || this.state.doctorsOpen
                  ? "active"
                  : null
              }
            >
              <a
                onClick={() =>
                  this.setState({ doctorsOpen: !this.state.doctorsOpen })
                }
                data-toggle="collapse"
              >
                <p className="menu-item" >Doctors</p>
              </a>
              <Collapse in={this.state.doctorsOpen}>
                <div>
                  <ul className="nav menu-item" >
                    <li
                      className={
                        this.isPathActive("/doctors/alldoctors")
                          ? "active"
                          : null
                      }
                    >
                      <Link to="/home/doctors/alldoctors" >All Doctors</Link>
                    </li>
                  </ul>
                </div>
              </Collapse>
            </li>

            <li
              className={
                this.isPathActive("/patients") || this.state.patientsOpen
                  ? "active"
                  : null
              }
            >
              <a
                onClick={() =>
                  this.setState({ patientsOpen: !this.state.patientsOpen })
                }
                data-toggle="collapse"
              >
                <i className="menu-item" />
                <p>Patients</p>
              </a>
              <Collapse in={this.state.patientsOpen}>
                <div>
                  <ul className="nav">
                    <li
                      className={
                        this.isPathActive("/home/patients/mypatients")
                          ? "active"
                          : null
                      }
                    >
                      <Link to="/home/patients/mypatients">My Patients</Link>
                    </li>
                    <li
                      className={
                        this.isPathActive("/home/patients/allpatients")
                          ? "active"
                          : null
                      }
                    >
                      <Link to="/home/patients/allpatients">All Patients</Link>
                    </li>
                    <li
                      className={
                        this.isPathActive("/home/patients/addpatient")
                          ? "active"
                          : null
                      }
                    >
                      <Link to="/home/patients/addpatient">Add Patient</Link>
                    </li>
                  </ul>
                </div>
              </Collapse>
            </li>
          </ul>
        </Menu>
      </div>
    );
  }
}

export default withRouter(Sidebar);
