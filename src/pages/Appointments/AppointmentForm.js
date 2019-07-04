import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import CardRows from "react-bootstrap/CardColumns";
import Select from "react-select";
import "react-datepicker/dist/react-datepicker.css";
import DateTimeField from "react-datepicker";

import { registerLocale, setDefaultLocale } from "react-datepicker";
import en from "date-fns/locale/en-GB";


class AppointmentForm extends Component {
  state = {
    appointmentDate: new Date()
  };

  handleChange(date) {
    this.setState({
      appointmentDate: date
    });
  }

  render() {
    const patientNames = this.props.allPatients.map(patient =>
      Object.assign(
        {},
        {
          label: [
            <img src={patient.profile_pic} height="20px" />,
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
              {/* <TimePicker
                 
              /> */}
            </Card.Body>
          </Card>

          <Card bg="light" style={{ width: "18rem" }}>
            <Card.Header align="center">End Time</Card.Header>
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
        </CardRows>

        <CardRows>
          <Card bg="light" style={{ width: "18rem" }}>
            <Card.Header align="center">Patient</Card.Header>
            <Card.Body align="center">
              <Select options={patientNames} />
            </Card.Body>
          </Card>

          <Card bg="light" style={{ width: "18rem" }}>
            <Card.Header align="center">Condition</Card.Header>
            <Card.Body align="center">
              <Form.Control as="select">
                <option>Cardiovascular</option>
                <option>Neurological</option>
                <option>Anatomical</option>
                <option>Gastro-Intestinal Tract</option>
              </Form.Control>
            </Card.Body>
          </Card>
        </CardRows>
      </Card>
    );
  }
}

export default AppointmentForm;
