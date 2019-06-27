import React, { Component } from "react";
import { Route } from "react-router-dom";

// import Header from "./Header.js"
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar/index.js";

// Pages
import Dashboard from "../Dashboard";
import Appointments from "../Appointments";
import Doctors from "../Doctors";
import Patients from "../Patients ";


class Home extends Component {

    state = {
        userInfo: false
    }

    expandUserInfo = () =>{
        this.setState({
            userInfo: !this.state.userInfo
        })
    }

  render() {
    return (
      <div>
        <Sidebar expandUserInfo={this.expandUserInfo} userInfo={this.state.userInfo}/>
        This is the Homepage!
        <Navbar />
        <Route exact path="/" component={Dashboard} />
        <Route path="something" component={Appointments} />
        <Route path="something" component={Doctors} />
        <Route path="something" component={Patients} />
      </div>
    );
  }
}

export default Home;
