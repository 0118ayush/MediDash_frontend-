import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

// import Header from "./Header.js"
import Navbartop from "../../components/NavbarTop";
import Sidebar from "../../components/Sidebar/index.js";

// Pages


class Home extends Component {
  state = {
      
  };

  

  render() {
    return (
      <div>
        <Sidebar
          expandUserInfo={this.expandUserInfo}
          userInfo={this.state.userInfo}
        />
        This is the Homepage!
      </div>
    );
  }
}

export default Home;
