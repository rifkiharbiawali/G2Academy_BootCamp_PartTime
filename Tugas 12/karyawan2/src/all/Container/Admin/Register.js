import React, { Component } from "react";
import Input from "./Input";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import { Button } from "react-bootstrap";
var CryptoJS = require("crypto-js");

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

  inputregister = async () => {
    let array = this.props.data;
    let sama = false;
    for (let i = 0; i < array.length; i++) {
      if (this.props.nama === array[i].nama) {
        sama = true;
        // } else {
      }
    }
    if (!sama) {
      let array = this.props.data;
      alert("data tersimpan");
      // const userData = {
      //   nama: `${this.props.nama}`,
      //   moto: `${this.props.moto}`,
      //   foto: `${this.props.foto}`,
      //   divisi: `${this.props.divisi}`,
      //   linkgit: `${this.props.linkgit}`,
      //   password: `${this.props.password}`,
      // };

      await this.props.ubahdata("data", [
        ...array,
        {
          nama: `${this.props.nama}`,
          moto: `${this.props.moto}`,
          foto: `${this.props.foto}`,
          divisi: `${this.props.divisi}`,
          linkgit: `${this.props.linkgit}`,
          password: `${this.props.password}`,
        },
      ]);
    } else {
      alert("nama tidak boleh sama");
    }
    let stringi = CryptoJS.AES.encrypt(
      JSON.stringify(this.props.data),
      "my-secret-key@123",
    ).toString();
    // let stringi = JSON.stringify(this.props.data);
    localStorage.setItem("dataUser", [stringi]);
  };

  encrypt = () => {
    let ciphertext = CryptoJS.AES.encrypt(
      JSON.stringify(this.props.data),
      "my-secret-key@123",
    ).toString();

    var bytes = CryptoJS.AES.decrypt(ciphertext, "my-secret-key@123");
    var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    console.log(JSON.stringify(this.props.data));
    console.log(ciphertext);
    console.log(decryptedData);
  };

  render() {
    return (
      <>
        <div className="header">
          <ul>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "white",
                alignItems: "center",
              }}
            >
              <Menu>Beranda</Menu>
            </Link>
            <Link
              to="/Register"
              style={{ textDecoration: "none", color: "white" }}
            >
              <Menu>Input Karyawan</Menu>
            </Link>
          </ul>
          <ul>
            <Menu>
              <Button variant="danger" onClick={this.logout}>
                Logout
              </Button>
            </Menu>
          </ul>
        </div>
        <form>
          <h4>Input Karyawan</h4>
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
          <select
            value={this.props.divisi}
            onChange={this.ubahValue}
            name="divisi"
          >
            <option value="/">--Divisi--</option>
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
          </select>
          <br />
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
          {/* <Input
            tipe="button"
            kelas="btn btn-primary"
            nilai="Tes"
            klik={this.encrypt}
          /> */}
        </form>
      </>
    );
  }
}

export default Register;
