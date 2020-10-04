import React, { Component } from "react";
// import Home from ".";
class Input extends Component {
  state = {};
  render() {
    return (
      <div className="input">
        <input
          name={this.props.nama}
          type={this.props.tipe}
          placeholder={this.props.label}
          value={this.props.nilai2}
          onChange={this.props.nilai}
        />
      </div>
    );
  }
}

export default Input;
