import React, { Component } from "react";
// import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import Cover from "./all/Container/Cover";
import NavRouter from "./all/Router/navrout";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  // cont data =  [{ nama: "Rifki" }];
  // data = () => {

  // };
  render() {
    return (
      <>
        <NavRouter />
      </>
    );
  }
}

export default App;
