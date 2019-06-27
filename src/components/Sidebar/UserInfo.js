import React, { Component } from 'react';
import { Collapse } from 'react-bootstrap';
import cx from 'classnames';

class UserInfo extends Component {

 
  render() {
    // let { user } = this.props;
    // let { isShowingUserMenu } = this.state;
    return (
      <div className="user-wrapper">
        <div className="user">
          <img src="https://s3.amazonaws.com/f6s-public/profiles/1337722_original.jpg" alt="Ayush Gehlot" className="photo" />
          <div className="userinfo">
            <div className="username">
              Ayush Gehlot
            </div>
            <div className="title">Admin</div>
          </div>
          <span
           onClick={this.props.expandUserInfo}
           aria-controls="example-collapse-text">
           More Info
           </span>
        </div>
        <Collapse in={this.props.userInfo}>
          <ul id="example-collapse-text">
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