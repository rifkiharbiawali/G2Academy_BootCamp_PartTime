import React, { Component } from "react";
import "../General.css";
import telephone from "./telephone.png";
import email from "./note.png";
import facebook from "./facebook.png";
import twitter from "./twitter.png";
import instagram from "./instagram.png";
class Kontak extends Component {
  render() {
    return (
      <>
        <div className="kontak">
          <h2>Contact</h2>
          <ul>
            <li class="nolist">
              <img src={telephone} alt="Phone" />
              <span>085793491196</span>
            </li>
            <li class="nolist">
              <img src={email} alt="Email" />
              <span>rifkiharbiawali@gmail.com</span>
            </li>
            <li class="nolist">
              <a href="https://web.facebook.com/?_rdc=1&_rdr">
                <img src={facebook} alt="Facebook" />
              </a>

              <a href="https://web.facebook.com/?_rdc=1&_rdr">
                <img src={twitter} alt="Twitter" />
              </a>

              <a href="https://web.facebook.com/?_rdc=1&_rdr">
                <img src={instagram} alt="Instagram" />
              </a>
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export default Kontak;
