import React, { Component } from "react";
import { Route } from "react-router-dom";

import AllDoctorsList from "./AllDoctorList";
import DoctorShow from "./DoctorShow"

class Doctors extends Component {
  render() {
    const { allDoctors } = this.props;

    return (
      <div>
        Im the Doctor's Index! I will give all functionality of the Doctors
        components!
        <Route
          path={`${this.props.match.url}/alldoctors`}
          component={props => (
            <AllDoctorsList {...props} allDoctors={allDoctors} />
          )}
        />
        <Route
          path={`${this.props.match.path}/:id`}
          component={props => <DoctorShow />}
        />
      </div>
    );
  }
}

export default Doctors;
