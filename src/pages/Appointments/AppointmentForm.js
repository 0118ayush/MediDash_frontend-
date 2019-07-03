import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Select from "react-select";
import "react-datepicker/dist/react-datepicker.css";
import DateTimeField from "react-datepicker"
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
      Object.assign({}, { label: [<img src={patient.profile_pic} height="20px" />, "  ", patient.first_name + " " + patient.last_name ], value: patient.id })
    );

    return (
      <div className="container">
        <label>Date</label><br/>
        <DateTimeField
          selected={this.state.appointmentDate}
          format="DD-MM-YYYY"
          viewMode="date"
          inputFormat="DD-MM-YYYY"
          onChange={date => this.handleChange(date)}
        />
        <Form>
          <Form.Group >
            <Form.Label>Condition </Form.Label>
            <Form.Control as="select">
              <option>Cardiovascular</option>
              <option>Neurological</option>
              <option>Anatomical</option>
              <option>Gastro-Intestinal Tract</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect2">
            <Form.Label>Example multiple select</Form.Label>
            <Form.Control as="select" multiple>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
          <label>Patient</label>
          <div >
            <div >
              <div className="col-md-4" />
              <div className="col-md-4">
                <Select options={patientNames} />
              </div>
              <div className="col-md-4" />
            </div>
          </div>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Notes</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default AppointmentForm;
