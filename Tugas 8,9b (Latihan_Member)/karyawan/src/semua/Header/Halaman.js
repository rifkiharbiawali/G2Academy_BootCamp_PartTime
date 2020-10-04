import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { Home, Register, Tabel, Beranda } from "../../halaman";

class Halaman extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nama: "tes",
      email: "",
      password: "",
      Data: [{ Email: "rifki@gmail.com", Nama: "Rifki", Password: "tes" }],
      login: false,
    };
  }

  ubahstatus = (nilais) => {
    this.setState({ login: nilais });
  };

  ubahdata = (key, nilai) => {
    this.setState({ [key]: nilai });
  };

  // kirimdata = () => {
  //   this.props.tampung("inilogin");
  //   console.log(this.props.tampung("inilogin"));
  // };
  // user = (users) => {
  //   this.setState({ email: users });
  // };

  // password = (passwords) => {
  //   this.setState({ password: passwords });
  // };

  // nama = (namas) => {
  //   this.setState({ nama: namas });
  // };

  render() {
    return (
      <Switch>
        <Route exact path="/" nama={this.state.nama}>
          <Beranda
            ubahstatus={this.ubahstatus}
            ubahdata={this.ubahdata}
            uusers={this.state.email}
            upasswords={this.state.password}
          />
        </Route>

        <Route path="/Register">
          <Register
            uuser={this.user}
            upassword={this.password}
            unama={this.nama}
            uusers={this.state.email}
            upasswords={this.state.password}
            unamas={this.state.nama}
            login={this.state.login}
            Data={this.state.Data}
            ubahdata={this.ubahdata}
          />
        </Route>

        <Route path="/Member">
          <Tabel
            ubahstatus={this.ubahstatus}
            login={this.state.login}
            Data={this.state.Data}
          />
        </Route>

        <Route path="/Login">
          <Home
            Data={this.state.Data}
            ubahstatus={this.ubahstatus}
            ubahdata={this.ubahdata}
            uusers={this.state.email}
            upasswords={this.state.password}
            login={this.state.login}
          />
        </Route>
      </Switch>
    );
  }
}

export default Halaman;
