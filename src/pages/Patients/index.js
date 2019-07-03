import React, { Component } from 'react';
import {Route} from "react-router-dom"
import AllPatientList from "./AllPatientList"
import MyPatientList from "./MyPatientList"
import AddPatientForm from "./AddPatientForm"


class Patients extends Component {
    render() {
        const {allPatients, myPatients} = this.props
        return (
            <div>
                
                <Route path={`${this.props.match.url}/allpatients`} component={props => <AllPatientList allPatients={allPatients} />}/>
                <Route path={`${this.props.match.url}/mypatients`} component={props => <MyPatientList myPatients={myPatients} />} />
                <Route path={`${this.props.match.url}/addpatient`} component ={props => <AddPatientForm allPatients={allPatients} />}/>
            </div>
        );
    }
}

export default Patients;