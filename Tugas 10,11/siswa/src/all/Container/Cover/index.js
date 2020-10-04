import React, { Component } from "react";
import Button from "./Button";
import "./cover.css";
// import LoginAdmin from "../LoginAdmin";
import { Link } from "react-router-dom";
// import LoginSiswa from "../LoginSiswa";
// import Register from "../LoginSiswa/Register";
class Cover extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // tes = () => {
  //   console.log(this.props.data2);
  // };

  render() {
    return (
      <div className="cover">
        <h1>G2 Academy Student</h1>
        <h3>Siapa Kamu?</h3>
        <div className="tombol">
          <Link to="/Admin">
            <Button tipe="btn btn-primary" klik={this.useradmin}>
              Admin
            </Button>
          </Link>
          <Link to="/Siswa">
            <Button tipe="btn btn-primary">Siswa</Button>
          </Link>
          {/* <Link to="/tes">
            <Button tipe="btn btn-primary">Tes</Button>
          </Link> */}
        </div>
        {/* <Router>
          <Switch></Switch>
        </Router> */}

        {/* </Router> */}
      </div>
    );
  }
}

export default Cover;
