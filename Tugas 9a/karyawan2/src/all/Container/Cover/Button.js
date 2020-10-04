import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <button className={this.props.tipe} onClick={this.props.klik}>
        {this.props.children}
      </button>
    );
  }
}

export default Button;
