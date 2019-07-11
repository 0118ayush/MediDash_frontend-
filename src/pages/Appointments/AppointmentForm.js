import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardRows from "react-bootstrap/CardColumns";
import Select from "react-select";
import "react-datepicker/dist/react-datepicker.css";
import DateTimeField from "react-datepicker";
// import {TimePicker} from 'antd'
import { Link } from "react-router-dom";

class AppointmentForm extends Component {
  state = {
    appointmentDate: new Date(),
    startTime: "",
    endTime: "",
    chosenPatientId: null,
    condition: ""
  };

  handleStateChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleChosenPatient = e => {
    this.setState({
      chosenPatientId: e.value
    });
  };

  handleChange(date) {
    this.setState({
      appointmentDate: date
    });
  }

  addAppointment = () => {
    const newAppointment = {
      patient_id: this.state.chosenPatientId,
      date: this.state.appointmentDate,
      from_time: this.state.startTime,
      to_time: this.state.endTime,
      condition: this.state.condition,
      status: "Pending",
      note: "",
      doctor_id: this.props.currentDoctor.id
    };

    this.props.addNewAppointment(newAppointment)
    alert("Patient has been saved.")
  };

  render() {
    const patientNames = this.props.allPatients.map(patient =>
      Object.assign(
        {},
        {
          label: [
            <img key={patient.id} src={patient.profile_pic} height="20px" />,
            "  ",
            patient.first_name + " " + patient.last_name
          ],
          value: patient.id
        }
      )
    );

    return (
      <Card className="container">
        <br />
        <CardRows>
          <Card bg="light" style={{ width: "18rem" }}>
            <Card.Header align="center">Date</Card.Header>
            <Card.Body align="center">
              <DateTimeField
                selected={this.state.appointmentDate}
                format="DD-MM-YYYY"
                viewMode="date"
                inputFormat="DD-MM-YYYY"
                onChange={date => this.handleChange(date)}
              />
            </Card.Body>
          </Card>

          <Card bg="light" style={{ width: "18rem" }}>
            <Card.Header align="center">Start Time</Card.Header>
            <Card.Body align="center">
              {/* <TimePicker format="HH:mm" /> */}
              <input
                type="time"
                name="startTime"
                onChange={this.handleStateChanges}
              />
            </Card.Body>
          </Card>

          <Card bg="light" style={{ width: "18rem" }}>
            <Card.Header align="center">End Time</Card.Header>
            <Card.Body align="center">
              <input
                type="time"
                name="endTime"
                onChange={this.handleStateChanges}
              />
            </Card.Body>
          </Card>
        </CardRows>

        <CardRows>
          <Card bg="light" style={{ width: "18rem" }}>
            <Card.Header align="center">Patient</Card.Header>
            <Card.Body align="center">
              <Select
                options={patientNames}
                value={this.state.chosenPatient}
                onChange={this.handleChosenPatient}
              />
            </Card.Body>
          </Card>

          <Card bg="light" style={{ width: "18rem" }}>
            <Card.Header align="center">Condition</Card.Header>
            <Card.Body align="center">
              <Form.Control
                as="select"
                name="condition"
                onChange={this.handleStateChanges}
              >
                <option>Cardiovascular</option>
                <option>Neurological</option>
                <option>Anatomical</option>
                <option>Gastro-Intestinal Tract</option>
              </Form.Control>
            </Card.Body>
          </Card>
        </CardRows>

        <CardRows>
          <Link to="/home">
            <Button variant="primary" size="sm">
              Cancel
            </Button>
          </Link>
          <Button variant="primary" size="sm" onClick={this.addAppointment}>
            Book
          </Button>
        </CardRows>
        <br />
      </Card>
    );
  }
}

export default AppointmentForm;
