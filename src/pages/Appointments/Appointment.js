import React, { Component } from 'react';

class Appointment extends Component {
    render() {
        
        return (
            <div>
                {this.props.appointment.date}
            </div>
        )
    }
}

export default Appointment;