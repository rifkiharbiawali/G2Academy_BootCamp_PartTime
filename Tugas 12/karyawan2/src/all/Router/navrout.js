import React, { Component } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Cover from "../Container/Cover";
import Back from "./Back";
import Register from "../Container/Admin/Register";
import LoginAdmin from "../Container/LoginAdmin";
import LoginSiswa from "../Container/LoginSiswa";
import HalamanAdmin from "../Container/Admin";
import Siswa from "../Container/Siswa";
import Rifki from "./Rifki.jpg";
import Asep from "./Asep.jpg";
import Dian from "./Dian.jpg";
import Shirleen from "./Shirleen.jpg";
import Pramadhio from "./Pramadhio.jpg";
import Yoshep from "./Yoshep.jpg";

class NavRouter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginadmin: false,
      login: false,
      nama: "",
      moto: "",
      foto: "",
      divisi: "",
      linkgit: "",
      password: "",
      useradmin: "",
      passwordadmin: "",
      data: [
        {
          nama: "Rifki",
          moto: "Bastotan Fil Ilmi Wal Jismi",
          foto: Rifki,
          linkgit: "https://github.com/rifkiharbiawali",
          divisi: "Frontend",
          password: "Rifki",
        },
        {
          nama: "ASEP",
          moto:
            "he who didn't taste the bitterness of learning, will suffer the humiliation of ignorance for the rest of his life",
          foto: Asep,
          linkgit: "https://github.com/asep10001",
          divisi: "Frontend",
          password: "ASEP",
        },
        {
          nama: "Dian",
          moto: "Sabar, ikhlas, Bersyukur",
          foto: Dian,
          linkgit: "https://github.com/dianprsty",
          divisi: "Backend",
          password: "Dian",
        },
        {
          nama: "Shirleen",
          moto: "Mengajar adalah cara terbaik untuk belajar",
          foto: Shirleen,
          linkgit: "https://github.com/shirahub",
          divisi: "Backend",
          password: "Shirleen",
        },
        {
          nama: "Pramadhio",
          moto: "Khawatir adalah penyalahgunaan sebuah imajinasi",
          foto: Pramadhio,
          linkgit: "https://github.com/dhioputro",
          divisi: "Backend",
          password: "Pramadhio",
        },
        {
          nama: "Yoshep",
          moto: "Ora Et Labora",
          foto: Yoshep,
          linkgit: "https://github.com/YosephMarioWibowo/",
          divisi: "Frontend",
          password: "Yoshep",
        },
      ],
      dataadmin: { nama: "Rifki", password: "1" },
      dataGet: [],
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
              <Cover
                loginadmin={this.state.loginadmin}
                loginkaryawan={this.state.login}
                dataadmin={this.state.dataadmin}
              />
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
                divisi={this.state.divisi}
              />
            </Route>
            <Route exact path="/Admin/:user">
              <HalamanAdmin
                dataadmin={this.state.dataadmin}
                floginadmin={this.ubahloginadmin}
                loginadmin={this.state.loginadmin}
                data={this.state.data}
                ubahdata={this.ubahdata}
                dataget={this.state.dataGet}
              />
            </Route>
            <Route path="/Siswa/:nama/:moto/:status/:foto/" component={Siswa} />
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
