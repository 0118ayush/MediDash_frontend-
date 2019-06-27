import React, { Component } from 'react';
import UserInfo from "./UserInfo"


class Sidebar extends Component {
    render() {
        return (
        <div >
            <div className="sidebar" ></div>
            <div className="brand" >
    
                <img src={'https://banner2.kisspng.com/20180501/qtq/kisspng-registered-nurse-nursing-nurse-practitioner-logo-c-golden-medical-symbol-5ae8e7df270aa1.7072635815252131511599.jpg'} alt="logo" height="200px" />
   
            </div>

            <div className="sidebar-wrapper">
                Im the doctor information!!!
            <UserInfo expandUserInfo={this.props.expandUserInfo} userInfo={this.props.userInfo}/>
            <div className="line"></div>
            {/* <Navbar /> */}
            </div>
            <div
            className="sidebar-background"
        >
            </div>
         </div>
        );
    }
}

export default Sidebar;