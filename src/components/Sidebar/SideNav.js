import React, { Component } from "react";
import { Collapse } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";

class SideNav extends Component {
  state = {
    appointmentsOpen: false,
    doctorsOpen: false,
    patientsOpen: false
  };

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }

  render() {
    let { location } = this.props;
    return (
      <ul className="nav">
        <li className={location.pathname === "/" ? "active" : null}>
          <Link to="/dashboard">
            {" "}
            <i className="pe-7s-graph"> </i> <p>Dashboard</p>{" "}
          </Link>
        </li>

        <li
          className={
            this.isPathActive("/appointments") || this.state.appointmentsOpen
              ? "active"
              : null
          }
        >
          <a
            onClick={() =>
              this.setState({ appointmentsOpen: !this.state.appointmentsOpen })
            }
            data-toggle="collapse"
          >
            <i className="pe-7s-plugin" />
            <p>
              {" "}
              Appointments <b className="caret" />
            </p>
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
                  <Link to="/home/appointments/addappointment">Add Appointment</Link>
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
            <i className="pe-7s-note2" />
            <p>
              Doctors <b className="caret" />
            </p>
          </a>
          <Collapse in={this.state.doctorsOpen}>
            <div>
              <ul className="nav">
                <li
                  className={
                    this.isPathActive("/doctors/alldoctors") ? "active" : null
                  }
                >
                  <Link to="/home/doctors/alldoctors">All Doctors</Link>
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
            <i className="pe-7s-news-paper" />
            <p>
              Patients <b className="caret" />
            </p>
          </a>
          <Collapse in={this.state.patientsOpen}>
            <div>
              <ul className="nav">
                <li
                  className={
                    this.isPathActive("/home/patients/mypatients") ? "active" : null
                  }
                >
                  <Link to="/home/patients/mypatients">My Patients</Link>
                </li>
                <li
                  className={
                    this.isPathActive("/home/patients/allpatients") ? "active" : null
                  }
                >
                  <Link to="/home/patients/allpatients">All Patients</Link>
                </li>
                <li
                  className={
                    this.isPathActive("/patients/addpatient") ? "active" : null
                  }
                >
                  <Link to="/patients/addpatient">Add Patient</Link>
                </li>
              </ul>
            </div>
          </Collapse>
        </li>
      </ul>
    );
  }
}

export default withRouter(SideNav);
