import React, { Component } from "react";
import Menu from "./Menu";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route, Link } from "react-router-dom";
import Admin from "../Container/Admin/";
import "./Header.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div className="header">
          <ul className="nav nav-pills mb-3">
            <Link to="/">
              <Menu>Home</Menu>
            </Link>
            <Link to="/data-siswa">
              <Menu>Data Siswa</Menu>
            </Link>
          </ul>
        </div>

        <Switch>
          <Route exact path="/">
            <Admin />
          </Route>

          <Route path="/data-siswa"></Route>
        </Switch>
      </>
    );
  }
}

export default Header;
