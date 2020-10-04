import React, { Component } from "react";
import TabelAnak from "./TabelAnak";
// import Logout from "./Logout";
import { Redirect } from "react-router-dom";
// import Home from "../Home";
class Tabel extends Component {
  state = {};
  keluar = () => {
    this.props.ubahstatus(false);
  };

  // validasi = () => {
  //   if (this.props.StatusLogin) {
  //     console.log(this.props.StatusLogin);
  //     return <Redirect to="/" />;
  //   }
  // };

  cek = () => {
    if (this.props.login === false) {
      // alert("anda harus login");
      return <Redirect to="/Login" />;
    }
  };
  render() {
    return (
      <div className="tabel">
        <h1>Tabel Karyawan</h1>
        <button onClick={this.keluar}>Logout</button>
        {/* <Logout klik={this.keluar} /> */}
        <TabelAnak Data={this.props.Data} />
        {this.cek()}
      </div>
    );
  }
}

export default Tabel;
