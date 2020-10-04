import React, { Component } from "react";

class Menu extends Component {
  state = {};
  render() {
    return <li>{this.props.children}</li>;
  }
}

export default Menu;
