import React, { Component } from "react";
// import Grup from "./Grup";
import "../LoginAdmin/input.css";
import Input from "./Input";
import { Link, Redirect } from "react-router-dom";
// import Register from "./Register";
class LoginSiswa extends Component {
  constructor(props) {
    super(props);
    this.state = { nama: "", password: "" };
  }
  setinput = (input) => {
    input.preventDefault();
    console.log(this.props.login);
    let nama = input.target.name;
    let nilai = input.target.value;
    this.setState({ [nama]: nilai });
    console.log(this.state.nama);
    console.log(this.state.password);
  };
  pindah = () => {
    let array = this.props.data;
    for (let i = 0; i < array.length; i++) {
      if (
        this.props.login === true &&
        this.state.nama === this.props.data[i].nama
      ) {
        return (
          <Redirect
            // to="/Siswa/tes/tes2/res/tes"
            to={`/Siswa/${array[i].nama}/${array[i].moto}/${this.props.login}/${array[i].foto}/${array[i].linkgit}`}
          />
        );
      }
    }
  };

  jika = () => {
    let data = this.props.data;
    console.log(data[2].nama);
    for (let i = 0; i < data.length; i++) {
      if (
        this.state.nama === data[i].nama &&
        this.state.password === data[i].password
      ) {
        this.props.ubahlogin(true);
        return;
      }
    }
  };
  render() {
    return (
      <>
        {this.pindah()}
        <form>
          <h4>Hi Siswa</h4>
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
          <Link to="/Register">
            <Input tipe="button" kelas="btn btn-primary" nilai="Register" />
          </Link>
        </form>
      </>
    );
  }
}

export default LoginSiswa;
