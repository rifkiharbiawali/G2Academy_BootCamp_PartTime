import React, { Component } from "react";
import Input from "./Input";
// import { Link } from "react-router-dom";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  ubahValue = (input) => {
    let nama = input.target.name;
    let value = input.target.value;
    this.props.ubahdata(nama, value);
    // this.setState({ [nama]: input.target.value });
    // console.log(this.props.upasswords);
    // console.log(this.props.uusers);
    // console.log(this.props.unamas);
  };

  inputregister = () => {
    let array = this.props.data;
    for (let i = 0; i < array.length; i++) {
      if (this.props.nama === array[i].Email) {
      } else {
        console.log(this.props.data);
        alert("data tersimpan");
        this.props.data.push({
          nama: `${this.props.nama}`,
          moto: `${this.props.moto}`,
          foto: `${this.props.foto}`,
          linkgit: `${this.props.linkgit}`,
          password: `${this.props.password}`,
        });
        return;
      }
    }
  };

  render() {
    return (
      <>
        <form>
          <h4>Register Siswa</h4>
          <Input
            nama="nama"
            tipe="text"
            keterangan="Nama"
            kelas="form-control"
            nilai={this.props.nama}
            berubah={this.ubahValue}
          />
          <Input
            nama="moto"
            tipe="text"
            keterangan="Moto/Quote"
            kelas="form-control"
            nilai={this.props.moto}
            berubah={this.ubahValue}
          />
          <Input
            nama="foto"
            tipe="file"
            kelas="form-control"
            nilai={this.props.foto}
            berubah={this.ubahValue}
          />
          <Input
            nama="linkgit"
            tipe="text"
            keterangan="Link Github"
            kelas="form-control"
            nilai={this.props.linkgit}
            berubah={this.ubahValue}
          />
          <Input
            nama="password"
            tipe="password"
            keterangan="Password"
            kelas="form-control"
            nilai={this.props.password}
            berubah={this.ubahValue}
          />
          <Input
            tipe="button"
            kelas="btn btn-primary"
            nilai="Register"
            klik={this.inputregister}
          />
        </form>
      </>
    );
  }
}

export default Register;
