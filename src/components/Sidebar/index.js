import React, { Component } from 'react';
import UserInfo from "./UserInfo"
import SideNav from "./SideNav"

class Sidebar extends Component {
    render() {
        return (
            
             <div className="sidebar" data-color="azure" data-image="">
    
                <div className="sidebar-wrapper">
                  <UserInfo currentDoctor={this.props.currentDoctor}/>
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
            
      
        
        );
    }
}

export default Sidebar;