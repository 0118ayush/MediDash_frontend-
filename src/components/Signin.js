// react components
import React, { Component } from "react";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

// apis 
import { signinFetch } from "../services/apis"

class Signin extends Component {

    state = {
        email: "", 
        password: ""
    }


    handleChange = (e) => {
        this.setState({
            [e.target.type]: e.target.value
        })
    }
    

    handleSubmit = (e) =>{
        e.preventDefault()
        signinFetch(this.state.email, this.state.password)
        .then(data => {
                if (data.error){
                    alert(data.error)
                } else {
                    this.props.signin(data)
                }
            })
    }


  render() {
    return (
      <div className="container">
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control onChange={this.handleChange} name="email" type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control onChange={this.handleChange} name="password" type="password" placeholder="Password" />
          </Form.Group>
         
          <Button onClick={this.handleSubmit} variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default Signin;
