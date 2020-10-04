import React, { Component } from "react";
import Sambutan from "./Sambutan";

class Beranda extends Component {
  state = {};
  // tes = () => {
  //   return <Sambutan />;
  // };
  render() {
    return (
      <>
        <Sambutan />
        {/* <Sambutan />
        {this.tes()} */}
      </>
    );
  }
}

export default Beranda;
