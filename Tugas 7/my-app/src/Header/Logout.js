import React, { Component } from "react";
import "../General.css";
import "./MenuUtama.css";
class Logout extends Component {
  state = {};
  render() {
    return (
      <>
        <a href="./index.html" className="nolink">
          <p className="logout">Logout</p>
        </a>
      </>
    );
  }
}

export default Logout;
