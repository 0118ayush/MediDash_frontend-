import React, { Component } from 'react';
import UserInfo from "./UserInfo"
import SideNav from "./SideNav"

class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar" data-color="azure" data-image="">
    
            <div className="sidebar-wrapper">
              <UserInfo />
              <div className="line"></div>
              <SideNav />
            </div>
            <div
              className="sidebar-background"
            //   style={{
            //     backgroundImage: enableBackgroundImage ? 'url(' + backgroundImage + ')' : null
            //   }}
              >
            </div>
          </div>

        // <div >
        //     <div className="sidebar" ></div>

        //     <div className="sidebar-wrapper">
        //         Im the doctor information!!!
        //     <UserInfo expandUserInfo={this.props.expandUserInfo} />
        //     <div className="line"></div>
        //     <SideNav />
        //     </div>
        //     <div className="sidebar-background" >
        //     </div>
        //  </div>
        );
    }
}

export default Sidebar;