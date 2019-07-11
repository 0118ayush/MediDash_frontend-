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
    const { currentDoctor } = this.props;

    return (
      <div>
        <Menu tabindex="-1">

          <Col xs={6} md={4} tabindex="-1">
            <img src={currentDoctor.profile_pic} className="img-circle" height="200px" width="215px" tabindex="-1" />
          </Col>
          <div className="doctor_items">
            <div align="center">Dr {currentDoctor.last_name}</div>
            <div align="center">{currentDoctor.specialty}</div>
          </div>

          <ul className="nav" >
            <li tabindex="-1">
              <Link to="/home" >
                <p className="bm-item">Dashboard</p>
              </Link>
            </li>

            <li tabindex="-1">
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
                  <ul className="list" >
                    <li>
                      <Link to="/home/appointments/myappointments" className="dropdowns">
                        My Appointments
                      </Link>
                    </li>
                    <li>
                      <Link to="/home/appointments/allappointments" className="dropdowns">
                        All Appointments
                      </Link>
                    </li>
                    <li>
                      <Link to="/home/appointments/addappointment" className="dropdowns">
                        Add Appointment
                      </Link>
                    </li>
                  </ul>
                </div>
              </Collapse>
            </li>

            <li tabindex="-1">
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
                  <ul className="nav menu-item" className="list">
                    <li>
                      <Link to="/home/doctors/alldoctors" className="dropdowns" >All Doctors</Link>
                    </li>
                  </ul>
                </div>
              </Collapse>
            </li>

            <li tabindex="-1">
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
                  <ul className="nav" className="list">
                    <li>
                      <Link to="/home/patients/mypatients" className="dropdowns" >My Patients</Link>
                    </li>
                    <li>
                      <Link to="/home/patients/allpatients" className="dropdowns" >All Patients</Link>
                    </li>
                    <li>
                      <Link to="/home/patients/addpatient" className="dropdowns" >Add Patient</Link>
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
