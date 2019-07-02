import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import en from "date-fns/locale/en-GB";

class AppointmentForm extends Component {
  state = {
    startDate: new Date()
  };

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  render() {
    const patientNames = this.props.allPatients.map(patient =>
      Object.assign({}, { label: patient.first_name, value: patient.id })
    );

    return (
      <div>
        <DatePicker
          selected={this.state.startDate}
          onChange={date => this.handleChange(date)}
          dateFormat="MMMM d, yyyy"
        />
        <Form>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Date</Form.Label>
            <Form.Control type="email" placeholder="e.g. 01/07/2019" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
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
          <div className="container">
            <div className="row">
              <div className="col-md-4" />
              <div className="col-md-4">
                <Select options={patientNames} />
              </div>
              <div className="col-md-4" />
            </div>
          </div>
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
