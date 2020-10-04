import React, { Component } from "react";
import Input from "./input";
import { Redirect } from "react-router-dom";

class Register extends Component {
  state = {
    // nama: "",
    // email: "",
    // password: "",
    // Data: [{ Email: "tes", Nama: "", Password: "" }],
    cekUser: "tes",
  };

  ubahValue = (input) => {
    let nama = input.target.name;
    let value = input.target.value;
    this.props.ubahdata(nama, value);
    // this.setState({ [nama]: input.target.value });
    console.log(this.props.upasswords);
    console.log(this.props.uusers);
    console.log(this.props.unamas);
  };

  inputRegister = (event) => {
    event.preventDefault();
    // let sta = this.state;
    // let nama = input.target.name;

    console.log(this.props.Data);
    let array = this.props.Data;
    let sama = false;
    for (let i = 0; i < array.length; i++) {
      if (this.props.uusers === array[i].Email) {
        sama = true;
        // alert("data tersimpan");
        // this.props.ubahdata("Data", [
        //   ...array,
        //   {
        //     Nama: `${this.props.unamas}`,
        //     Email: `${this.props.uusers}`,
        //     Password: `${this.props.upasswords}`,
        //   },
        // ]);
        // this.props.Data.push({
        //   Nama: `${this.props.unamas}`,
        //   Email: `${this.props.uusers}`,
        //   Password: `${this.props.upasswords}`,
        // });
        // return;
      }
    }

    if (!sama) {
      alert("data tersimpan");
      this.props.ubahdata("Data", [
        ...array,
        {
          Nama: `${this.props.unamas}`,
          Email: `${this.props.uusers}`,
          Password: `${this.props.upasswords}`,
        },
      ]);
    } else {
      alert("email sudah ada");
    }
    // this.setState({ value: nilai });

    // console.log(this.state.Email[1].Email);
    // console.log(this.state.Nama[1].Nama);
    // console.log(this.state.Password[1].Password);
  };
  // alih = () => {
  //   let klik = document.getElementById("klik");
  //   console.log(klik);
  //   if () {
  //     return <Redirect to="/Login" />;
  //   }
  // };

  // Register = (masuk) => {
  //   masuk.preventDefault();
  //   this.props.uuser("tes");
  //   this.props.upassword("tes");
  //   console.log(this.props.user);
  // };
  // dataTambah = () => {
  //   let dataParkir = [];
  //   if (localStorage.getItem("dataParkir")) {
  //     dataParkir = JSON.parse(localStorage.getItem("dataParkir"));
  //   }
  // };
  // register = (norefresh) => {
  //   norefresh.preventDefault();

  //   const data = this.state;
  //   let st = JSON.stringify(data);
  //   localStorage.setItem("data", st);
  //   window.location.href = "/";
  // };

  cek = () => {
    if (this.props.login === true) {
      return <Redirect to="/Member" />;
    }
  };
  // cek2 = () => {
  // let array = this.props.Data;
  // for (let i = 0; i < array.length; i++) {
  //   if (this.props.uusers === array[i].Email) {
  //     alert("email sudah ada");
  //   }
  // }
  // };

  render() {
    return (
      <div id="register">
        <h1>Register</h1>
        <form>
          <Input
            nama="email"
            tipe="email"
            label="Email"
            nilai2={this.props.uusers}
            nilai={this.ubahValue}
          />
          <Input
            nama="nama"
            tipe="text"
            label="Nama Lengkap"
            nilai2={this.props.unamas}
            nilai={this.ubahValue}
          />
          <Input
            nama="password"
            tipe="password"
            label="Password"
            nilai2={this.props.upasswords}
            nilai={this.ubahValue}
          />
          <button id="klik" onClick={this.inputRegister}>
            Register
          </button>
        </form>
        {/* {this.alih()} */}
        {/* {this.cek2()} */}
        {this.cek()}
      </div>
    );
  }
}

export default Register;
