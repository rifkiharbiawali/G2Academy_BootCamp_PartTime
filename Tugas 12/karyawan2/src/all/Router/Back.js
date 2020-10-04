import React, { Component } from "react";
import { Link } from "react-router-dom";

class Back extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Link to="/">
        <button>Back To Home</button>
      </Link>
    );
  }
}

export default Back;
