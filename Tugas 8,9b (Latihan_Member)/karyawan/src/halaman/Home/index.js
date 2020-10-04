import React, { Component } from "react";
import Input from "./Input";
import { Link, Redirect } from "react-router-dom";
// import AksesData from "../index";
// import { Tabel } from "../../halaman";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // nilaiUser: "",
      // password: "",
    };
  }

  // class Judul extends Component {
  //   state = {  }
  //   render() {
  //   return ( <AksesData>{this.props.children}</AksesData> );
  //   }
  // }

  ubahValue = (input) => {
    let nama = input.target.name;
    let value = input.target.value;
    this.props.ubahdata(nama, value);
    // this.setState({ [nama]: input.target.value });
    console.log(this.props.upasswords);
    console.log(this.props.uusers);
  };

  validasi = (tes) => {
    tes.preventDefault();
    let array = this.props.Data;
    console.log(array[0].Email);
    // let found = false;
    for (var i = 0; i < array.length; i++) {
      if (
        this.props.uusers === array[i].Email &&
        this.props.upasswords === array[i].Password
      ) {
        this.props.ubahstatus(true);
        return;
      }

      // else if (this.props.login === false) {
      //   alert("kode salah");
      // }
    }
    // if (!found) {
    alert("pasword salah");
    // }
    // if (
    //   this.props.uusers !== array[i].Email &&
    //   this.props.upasswords !== array[i].Password
    // ) {
    //   alert("kode salah");
    // }
  };

  pindah = () => {
    if (this.props.login === true) {
      return <Redirect to="/Member" />;
    }
  };
  render() {
    return (
      <>
        <h1>Login</h1>
        <form>
          <Input
            nama="email"
            tipe="email"
            label="Email"
            nilai2={this.props.uusers}
            nilai={this.ubahValue}
          />
          <Input
            nama="password"
            tipe="password"
            label="Password"
            nilai2={this.props.upasswords}
            nilai={this.ubahValue}
          />
          <button onClick={this.validasi}>Login</button>
          <Link to="/Register">
            <button>Register</button>
          </Link>
        </form>
        {this.pindah()}
      </>
    );
  }
}

export default Home;
// export default Judul;
