import React, { Component } from "react";
import Halaman from "../Header/Halaman";

class Container extends Component {
  state = { login: "ini Lofin" };
  ubahlogin = (nilais) => {
    this.setState({ login: nilais });
  };
  render() {
    return (
      <div className="Container">
        <Halaman tampung={this.ubahlogin} />
      </div>
    );
  }
}

export default Container;
