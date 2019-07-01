import React, { Component } from 'react';
import Appointment from "./Appointment"

class AppointmentList extends Component {

    

    render() {
        return (
            <div>
                
                {this.props.myAppointments.map(appointment => {
                   return <Appointment appointment={appointment} /> 
                })}
            </div>
        );
    }
}

export default AppointmentList;