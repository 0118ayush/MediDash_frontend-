import React, { Component } from 'react';
import {Route} from "react-router-dom"
import AllPatientList from "./AllPatientList"
import MyPatientList from "./MyPatientList"



class Patients extends Component {
    render() {
        const {allPatients, myPatients} = this.props
        return (
            <div>
                Im the Patient's Index! I will give all functionality of the Patients components!
                <Route path={`${this.props.match.url}/allpatients`} component={props => <AllPatientList allPatients={allPatients} />}/>
                <Route path={`${this.props.match.url}/mypatients`} component={props => <MyPatientList myPatients={myPatients} />} />
            </div>
        );
    }
}

export default Patients;