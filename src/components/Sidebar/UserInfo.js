import React, { Component } from 'react';
import { Collapse } from 'react-bootstrap';
import cx from 'classnames';

 
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
            <img src={currentDoctor.profile_pic} alt={currentDoctor.last_name} className="photo" />
            <div className="userinfo">
              <div className="username">
                Dr {currentDoctor.last_name}
              </div>
              <div className="title">{currentDoctor.specialty}</div>
            </div>
            <span
              onClick={() => this.setState({ isShowingUserMenu: !this.state.isShowingUserMenu })}
              className={cx("pe-7s-angle-down collapse-arrow", {
                active: isShowingUserMenu
              })}></span>
          </div>
          <Collapse in={isShowingUserMenu}>
            <ul className="nav user-nav">
              <li><a href="#">My Profile</a></li>
              <li><a href="#">Edit Profile</a></li>
              <li><a href="#">Settings</a></li>
            </ul>
          </Collapse>
        </div>
      );
    }
}

export default UserInfo;