import React, { Component } from 'react';
import { Collapse } from 'react-bootstrap';
import cx from 'classnames';
import { Link } from 'react-router-dom';
 
  class UserInfo extends Component {

    state = {
      isShowingUserMenu: false
    };
  
    render() {
      let { currentDoctor } = this.props;
      let { isShowingUserMenu } = this.state;
      return (
        <div className="user-wrapper">
          <div className="user">
            <img src={currentDoctor.profile_pic} alt={currentDoctor.last_name} className="photo" height="200px" />
            <div className="userinfo">
              <div className="username">
                Dr {currentDoctor.last_name}
              </div>
              <div className="title">{currentDoctor.specialty}</div>
            </div>
            <span
              onClick={() => this.setState({ isShowingUserMenu: !this.state.isShowingUserMenu })}>V</span>
          </div>
          <Collapse in={isShowingUserMenu}>
            <ul className="nav user-nav">
              <Link to="/myprofile">My Profile</Link>
              <Link to="/editprofile">Edit Profile</Link>
            </ul>
          </Collapse>
        </div>
      );
    }
}

export default UserInfo;