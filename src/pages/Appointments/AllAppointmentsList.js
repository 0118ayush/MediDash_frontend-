import React, { Component } from "react";

//Components
import Appointment from "./Appointment";

class AllAppointmentsList extends Component {

  

  render() {
    return <div> 
        {this.props.allAppointments.map(appointment => {
       return <Appointment appointment={appointment} />
      })}
    </div>;
  }
}

export default AllAppointmentsList;
