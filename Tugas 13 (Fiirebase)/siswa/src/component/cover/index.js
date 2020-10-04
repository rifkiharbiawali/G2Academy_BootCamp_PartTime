import React, { Component } from "react";
import Tombol from "./Button";
import "./cover.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

class Cover extends Component {
  render() {
    return (
      <div className="cover">
        <h1>KIKI Academy</h1>
        <div className="siapa">
          <h3>Hi, Siapa Kamu?</h3>
          <span>
            <Link to="/Login_Admin">
              <Tombol tipe="success">Admin</Tombol>
            </Link>
            <Link to="/Login_Siswa">
              <Tombol tipe="success">Siswa</Tombol>
            </Link>
          </span>
        </div>
      </div>
    );
  }
}

export default Cover;
