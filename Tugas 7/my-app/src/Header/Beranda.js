import React, { Component } from "react";
import "./MenuUtama.css";
class Beranda extends Component {
  state = {};
  render() {
    return (
      <>
        <a href="./index.html" className="nolink">
          <p className="beranda">Home</p>
        </a>
      </>
    );
  }
}

export default Beranda;
