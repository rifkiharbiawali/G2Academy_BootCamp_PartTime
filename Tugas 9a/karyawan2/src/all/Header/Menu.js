import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <li className="nav-item">{this.props.children}</li>
      </>
    );
  }
}

export default Menu;
