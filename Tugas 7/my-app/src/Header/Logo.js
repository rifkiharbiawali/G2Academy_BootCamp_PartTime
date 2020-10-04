import React, { Component } from "react";
import "../General.css";
import "./MenuUtama.css";

class Logo extends Component {
  state = {};
  render() {
    return (
      <>
        <a href="./index.html" className="nolink">
          <h1 className="logo">Parkir</h1>
        </a>
      </>
    );
  }
}

export default Logo;
