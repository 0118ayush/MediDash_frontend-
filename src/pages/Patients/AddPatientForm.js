import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import DateTimeField from "react-datepicker";

import { addPatientBackend } from "../../services/apis";

class AddPatientForm extends Component {
  state = {
    DOB: new Date(),
    firstName: "",
    lastName: "",
    gender: "",
    mobile: "",
    email: "",
    marital: "",
    pPic: "",
    bGroup: "",
    bPressure: "",
    chronic: "",
    note: "",
    age: "5000",
    address: "",
    city: "",
    province: "",
    postcode: "",
    ethnicity: "British"
  };

  handleDateChange(date) {
    this.setState({
      DOB: date
    });
  }

  handleStateUpdates = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addNewPatient = e => {
    e.preventDefault();
    const {
      DOB,
      firstName,
      lastName,
      gender,
      mobile,
      email,
      marital,
      pPic,
      bGroup,
      bPressure,
      chronic,
      note,
      age,
      address,
      city,
      province,
      postcode,
      ethnicity
    } = this.state;

    const newPatient = {
      first_name: firstName,
      last_name: lastName,
      DOB: DOB,
      ethnicity: ethnicity,
      gender: gender,
      age: age,
      mobile: mobile,
      email: email,
      address: address,
      city: city,
      province: province,
      postcode: postcode,
      marital_status: marital,
      profile_pic: pPic,
      blood_group: bGroup,
      blood_pressure: bPressure,
      chronic_conditions: chronic,
      initial_note: note
    };
    if (
      this.props.allPatients.find(patient => patient.email === newPatient.email)
    ) {
      alert("Patient already exists.");
    } else {
      addPatientBackend(newPatient).then(console.log);
    }
  };

  render() {
    const chronics = [
      "None",
      "Alzheimer's/ Dementia",
      "Arthritis",
      "Asthma",
      "Cancer",
      "COPD",
      "Crohn disease",
      "Cystic fibrosis",
      "Diabetes",
      "Epilepsy",
      "Heart disease",
      "HIV/AIDS",
      "Mood disorders",
      "Multiple sclerosis",
      "Parkinson disease",
      "Other"
    ];

    const provinces = [
      "Bedfordshire",
      "Berkshire",
      "Bristol",
      "Buckinghamshire",
      "Cambridgeshire",
      "Cheshire",
      "City of London [N2]",
      "Cornwall",
      "Cumbria",
      "Derbyshire",
      "Devon",
      "Dorset",
      "County Durham Durham",
      "East Riding of Yorkshire",
      "East Sussex",
      "Essex",
      "Gloucestershire",
      "Greater London",
      "Greater Manchester",
      "Hampshire",
      "Herefordshire",
      "Hertfordshire",
      "Isle of Wight",
      "Kent",
      "Lancashire",
      "Leicestershire",
      "Lincolnshire",
      "Merseyside",
      "Norfolk",
      "North Yorkshire",
      "Northamptonshire",
      "Northumberland",
      "Nottinghamshire",
      "Oxfordshire",
      "Rutland",
      "Shropshire",
      "Somerset",
      "South Yorkshire",
      "Staffordshire",
      "Suffolk",
      "Surrey",
      "Tyne and Wear",
      "Warwickshire",
      "West Midlands",
      "West Sussex",
      "West Yorkshire",
      "Wiltshire",
      "Worcestershire"
    ];

    return (
      <div className="container">
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                name="firstName"
                placeholder="e.g. Sam"
                onChange={this.handleStateUpdates}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                name="lastName"
                placeholder="e.g. Smith"
                onChange={this.handleStateUpdates}
              />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formGridAddress1">
            <Form.Label>Profile Pic</Form.Label>
            <Form.Control
              name="pPic"
              placeholder="e.g. https://media.licdn.com/dms/image/..."
              onChange={this.handleStateUpdates}
            />
          </Form.Group>

          <Form.Row />

          <Form.Group controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control
              name="address"
              placeholder="e.g. 21 Kitwood Drive, Lower Earley..."
              onChange={this.handleStateUpdates}
            />
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control
                name="city"
                placeholder="e.g. Reading"
                onChange={this.handleStateUpdates}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Province</Form.Label>
              <Form.Control
                name="province"
                as="select"
                onChange={this.handleStateUpdates}
              >
                {provinces.map(province => (
                  <option>{province}</option>
                ))}
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Postcode</Form.Label>
              <Form.Control
                name="postcode"
                placeholder="e.g. E3 4BH"
                onChange={this.handleStateUpdates}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group>
              <label>Date of Birth</label> <br />
              <DateTimeField
                selected={this.state.DOB}
                format="DD-MM-YYYY"
                viewMode="date"
                inputFormat="DD-MM-YYYY"
                onChange={date => this.handleDateChange(date)}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Gender</Form.Label>
              <Form.Control
                name="gender"
                as="select"
                onChange={this.handleStateUpdates}
              >
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Label>Mobile #</Form.Label>
              <Form.Control
                name="mobile"
                placeholder="e.g. 07795826218"
                onChange={this.handleStateUpdates}
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                name="email"
                placeholder="e.g. ash@gmail.com"
                onChange={this.handleStateUpdates}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Marital status</Form.Label>
              <Form.Control
                name="marital"
                as="select"
                onChange={this.handleStateUpdates}
              >
                <option>Married</option>
                <option>Relationship</option>
                <option>Single</option>
                <option>Divorced</option>
                <option>Widowed</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Blood Group</Form.Label>
              <Form.Control
                name="bGroup"
                as="select"
                onChange={this.handleStateUpdates}
              >
                <option>A</option>
                <option>B</option>
                <option>O</option>
                <option>AB</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Chronic conditions</Form.Label>
              <Form.Control
                name="chronic"
                as="select"
                onChange={this.handleStateUpdates}
              >
                {chronics.map(condition => (
                  <option>{condition}</option>
                ))}
              </Form.Control>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group controlId="formGridPassword">
              <Form.Label>Initial BP</Form.Label>
              <Form.Control
                name="bPressure"
                placeholder="e.g. 100/70"
                onChange={this.handleStateUpdates}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Notes</Form.Label>
              <Form.Control
                name="note"
                as="textarea"
                onChange={this.handleStateUpdates}
              />
            </Form.Group>
          </Form.Row>

          <Button variant="primary" type="submit" onClick={this.addNewPatient}>
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default AddPatientForm;
