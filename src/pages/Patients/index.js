import React, { Component } from 'react';
import {Route} from "react-router-dom"
import AllPatientList from "./AllPatientList"
import MyPatientList from "./MyPatientList"
import AddPatientForm from "./AddPatientForm"


class Patients extends Component {
    render() {
        const {allPatients, myPatients, addNewPatient} = this.props
        return (
            <div>
                
                <Route path={`${this.props.match.url}/allpatients`} render={props => <AllPatientList allPatients={allPatients} />}/>
                <Route path={`${this.props.match.url}/mypatients`} render={props => <MyPatientList myPatients={myPatients} />} />
                <Route path={`${this.props.match.url}/addpatient`} component ={props => <AddPatientForm addNewPatient={addNewPatient} />}/>
            </div>
        );
    }
}

export default Patients;