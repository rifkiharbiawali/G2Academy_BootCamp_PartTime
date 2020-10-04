import React, { Component } from "react";
import Cover from "../cover";
import LoginAdmin from "../loginAdmin";
import LoginSiswa from "../loginSiswa";
import Register from "../loginSiswa/Register";
import HalamanAdmin from "../halamanAdmin";
import HalamanSiswa from "../halamanSiswa";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class MasterRoute extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Cover} />
            <Route path="/Login_Admin">
              <LoginAdmin />
            </Route>
            <Route exact path="/Login_Siswa">
              <LoginSiswa />
            </Route>
            <Route path="/Login_Siswa/Register">
              <Register />
            </Route>
            <Route path="/Admin/:user">
              <HalamanAdmin />
            </Route>
            <Route path="/Siswa/:user">
              <HalamanSiswa />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default MasterRoute;
