import React, { Component } from "react";
// import Grup from "./Grup";
import "./input.css";
import Input from "./Input";
import { Redirect } from "react-router-dom";
class LoginAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = { nama: "", password: "" };
  }
  pindah = () => {
    if (this.props.loginadmin === true) {
      // this.props.handleadmin(this.props.dataadmin.nama);
      return (
        <Redirect
          // to="/Admin/:user"
          to={`/Admin/${this.props.dataadmin.nama}`}
          // {this.props.handleadmin(this.state.nama)}
        />
      );
    }
    //  else if (this.props.loginadmin === false) {
    //   return <Redirect to="/Admin" />;
    // }
  };

  setinput = (input) => {
    input.preventDefault();
    console.log(this.props.loginadmin);
    let nama = input.target.name;
    let nilai = input.target.value;
    this.setState({ [nama]: nilai });
    console.log(this.state.nama);
    console.log(this.state.password);
  };
  jika = () => {
    let dataadmin = this.props.dataadmin;
    if (
      this.state.nama === dataadmin.nama &&
      this.state.password === dataadmin.password
    ) {
      this.props.floginadmin(true);
      return;
    }
  };

  render() {
    return (
      <form>
        <h4>Hi Admin</h4>
        <Input
          nama="nama"
          tipe="text"
          keterangan="Nama"
          kelas="form-control"
          berubah={this.setinput}
          nilai={this.state.nama}
        />
        <Input
          nama="password"
          tipe="password"
          keterangan="Password"
          kelas="form-control"
          berubah={this.setinput}
          nilai={this.state.password}
        />
        <Input
          tipe="button"
          kelas="btn btn-primary"
          nilai="Login"
          klik={this.jika}
        />

        {this.pindah()}
      </form>
    );
  }
}

export default LoginAdmin;
