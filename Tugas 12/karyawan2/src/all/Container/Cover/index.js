import React, { Component } from "react";
import Button from "./Button";
import "./cover.css";
// import LoginAdmin from "../LoginAdmin";
import { Link, Redirect } from "react-router-dom";
// import LoginSiswa from "../LoginSiswa";
// import Register from "../LoginSiswa/Register";
class Cover extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  cegah = () => {
    if (this.props.loginadmin === true) {
      return <Redirect to={`/Admin/${this.props.dataadmin.nama}`} />;
    } else if (this.props.loginkaryawan === true) {
      return <Redirect to="/Karyawan/user" />;
    }
  };

  // tes = () => {
  //   console.log(this.props.data2);
  // };

  render() {
    return (
      <div className="cover">
        <h1>Karyawan App</h1>
        <h3>Siapa Kamu?</h3>
        <div className="tombol">
          <Link to="/Admin">
            <Button tipe="btn btn-primary">HRD</Button>
          </Link>
          <Link to="/Siswa">
            <Button tipe="btn btn-primary">Karyawan</Button>
          </Link>
          {/* <Link to="/tes">
            <Button tipe="btn btn-primary">Tes</Button>
          </Link> */}
        </div>
        {/* <Router>
          <Switch></Switch>
        </Router> */}

        {/* </Router> */}
        {this.cegah()}
      </div>
    );
  }
}

export default Cover;
