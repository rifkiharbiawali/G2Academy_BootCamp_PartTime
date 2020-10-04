import React, { Component } from "react";

class Loout extends Component {
  state = {};
  render() {
    return <button onClick={this.props.klik}>Logout</button>;
  }
}

export default Loout;
