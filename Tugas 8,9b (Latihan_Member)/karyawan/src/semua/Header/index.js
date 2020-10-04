import React, { Component } from "react";
import Menu from "./Menu";
import "./Header.css";
import { Link } from "react-router-dom";

class Header extends Component {
  state = {};
  // ubahlogin = (nilais) => {
  //   this.setState({ login: nilais });
  // };

  // logout = () => {
  //   if (this.props.login === true) {
  //     return <Menu>Logout</Menu>;
  //   } else if (this.props.login === false) {
  //     return <Menu>Login</Menu>;
  //   }
  // };
  render() {
    return (
      <div className="header">
        <ul>
          <Link to="/">
            <Menu>Beranda</Menu>
          </Link>
          <Link to="/Register">
            <Menu>Register</Menu>
          </Link>
          <Link to="/Member">
            <Menu>Member</Menu>
          </Link>
        </ul>
        <ul>
          <Link to="/Login">
            <Menu>Login</Menu>
          </Link>
        </ul>
      </div>
    );
  }
}

export default Header;
