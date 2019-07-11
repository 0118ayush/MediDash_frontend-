import React, { Component } from "react";
import { Route } from "react-router-dom";

import AllDoctorsList from "./AllDoctorList";
import DoctorShow from "./DoctorShow";

class Doctors extends Component {
  render() {
    const { allDoctors } = this.props;

    return (
      <div>
       
        <Route
          path={`${this.props.match.url}/alldoctors`}
          render={props => (
            <AllDoctorsList {...props} allDoctors={allDoctors} />
          )}
        />
        <Route
          path={`${this.props.match.path}/:id`}
          render={props => <DoctorShow />}
        />
      </div>
    );
  }
}

export default Doctors;
