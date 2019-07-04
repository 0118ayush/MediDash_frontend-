import React, { Component } from "react";
import { Link } from "react-router-dom";
import SideNav from "./SideNav";

class Sidebar extends Component {
  render() {
    const { currentDoctor } = this.props;

    return (
      <div>
        <Link to="/home/profile">
          <img
            src={currentDoctor.profile_pic}
            alt={currentDoctor.last_name}
            className="photo"
            height="200px"
          />
        </Link>

        <div className="username">Dr {currentDoctor.last_name}</div>
        <div className="title">{currentDoctor.specialty}</div>

        <SideNav />
      </div>
    );
  }
}

export default Sidebar;
