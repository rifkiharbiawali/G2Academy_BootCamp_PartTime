import React, { Component } from "react";
import Logo from "./Logo";
import Beranda from "./Beranda";
import Tabel from "./Tabel";
import Logout from "./Logout";
import "../General.css";
import "./MenuUtama.css";

class MenuUtama extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="menuMaster">
          <ul className="menuUtama">
            <li>
              <Logo />
            </li>
            <li>
              <Beranda />
            </li>
            <li>
              <Tabel />
            </li>
          </ul>
          <ul className="kanan">
            <li>
              <Logout />
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export default MenuUtama;
