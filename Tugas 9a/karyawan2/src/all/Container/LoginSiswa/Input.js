import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./input.css";
class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <input
        name={this.props.nama}
        type={this.props.tipe}
        placeholder={this.props.keterangan}
        className={this.props.kelas}
        style={{ width: "200px", marginBottom: "10px" }}
        value={this.props.nilai}
        onChange={this.props.berubah}
        onClick={this.props.klik}
      />
    );
  }
}

export default Input;
