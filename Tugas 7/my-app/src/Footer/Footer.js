import React, { Component } from "react";
import Parkir from "./Parkir";
import Maps from "./Maps";
import Kontak from "./Kontak";
import "./Footer.css";
class Footer extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="footer">
          <Parkir />
          <Maps />
          <Kontak />
        </div>
      </>
    );
  }
}

export default Footer;
