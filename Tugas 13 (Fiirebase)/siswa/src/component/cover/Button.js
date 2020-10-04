import React, { Component } from "react";
import { Button } from "react-bootstrap";

class Tombol extends Component {
  render() {
    return <Button variant={this.props.tipe}>{this.props.children}</Button>;
  }
}

export default Tombol;
