import React, { Component } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Cover from "../Container/Cover";
import Back from "./Back";
import Register from "../Container/LoginSiswa/Register";
import LoginAdmin from "../Container/LoginAdmin";
import LoginSiswa from "../Container/LoginSiswa";
import HalamanAdmin from "../Container/Admin";
import Siswa from "../Container/Siswa";
import "./Rifki.jpg";

class NavRouter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginadmin: false,
      login: false,
      nama: "",
      moto: "",
      foto: "",
      linkgit: "",
      password: "",
      useradmin: "",
      passwordadmin: "",
      data: [
        {
          nama: "Rifki",
          moto: "Bastotan Fil Ilmi Wal Jismi",
          foto: "Rifki.jpg",
          linkgit: "https://github.com/rifkiharbiawali",
          password: "Rifki",
        },
        {
          nama: "ASEP",
          moto:
            "he who didn't taste the bitterness of learning, will suffer the humiliation of ignorance for the rest of his life",
          foto: "../Container/img/Asep.jpg",
          linkgit: "https://github.com/asep10001",

          password: "ASEP",
        },
        {
          nama: "Dian",
          moto: "Sabar, ikhlas, Bersyukur",
          foto: "../Container/img/Dian.jpg",
          linkgit: "https://github.com/dianprsty",
          password: "Dian",
        },
        {
          nama: "Shirleen",
          moto: "Mengajar adalah cara terbaik untuk belajar",
          foto: "../Container/img/Shirleen.jpg",
          linkgit: "https://github.com/shirahub",
          password: "Shirleen",
        },
        {
          nama: "Pramadhio",
          moto: "Khawatir adalah penyalahgunaan sebuah imajinasi",
          foto: "../Container/img/Pramadhio.jpg",
          linkgit: "https://github.com/dhioputro",
          password: "Pramadhio",
        },
        {
          nama: "Yoshep",
          moto: "Ora Et Labora",
          foto: "../Container/img/Yoshep.jpg",
          linkgit: "https://github.com/YosephMarioWibowo/",
          password: "Yoshep",
        },
      ],
      dataadmin: { nama: "Rifki", password: "Admin" },
    };
  }

  handleadmin = (nama) => {
    this.props.history.push(`/Siswa/${nama}`);
  };

  ubahdata = (key, nilai) => {
    this.setState({ [key]: nilai });
  };

  ubahloginadmin = (nilai) => {
    this.setState({ loginadmin: nilai });
  };

  ubahlogin = (nilai) => {
    this.setState({ login: nilai });
  };

  simpan = () => {};
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/">
              <Cover data2={this.props.data} />
            </Route>
            <Route path="/Ngasal" component={Back} />
            <Route exact path="/Admin">
              <LoginAdmin
                dataadmin={this.state.dataadmin}
                uadmin={this.state.useradmin}
                padmin={this.state.passwordadmin}
                loginadmin={this.state.loginadmin}
                floginadmin={this.ubahloginadmin}
                handleadmin={this.handleadmin}
              />
            </Route>
            <Route exact path="/Siswa">
              <LoginSiswa
                login={this.state.login}
                data={this.state.data}
                nama={this.state.nama}
                password={this.state.password}
                ubahlogin={this.ubahlogin}
              />
            </Route>
            <Route path="/Register">
              <Register
                nama={this.state.nama}
                moto={this.state.moto}
                foto={this.state.foto}
                linkgit={this.state.linkgit}
                password={this.state.password}
                data={this.state.data}
                ubahdata={this.ubahdata}
              />
            </Route>
            <Route exact path="/Admin/:user">
              <HalamanAdmin
                dataadmin={this.state.dataadmin}
                floginadmin={this.ubahloginadmin}
                loginadmin={this.state.loginadmin}
                data={this.state.data}
              />
            </Route>
            <Route
              path="/Siswa/:nama/:moto/:status/:foto/:linkgit/"
              component={Siswa}
            />
            {/* <Siswa ubahlogin={this.ubahlogin} />
            </Route> */}

            {/* <Route exact path="/Register" component={Back} />*/
            /*<Route exact path="/Siswa" component={Back} /> */}
          </Switch>
        </Router>
      </>
    );
  }
}

export default NavRouter;
