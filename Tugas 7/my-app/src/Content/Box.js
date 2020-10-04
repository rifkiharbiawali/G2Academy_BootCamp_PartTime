import React, { Component } from "react";
import Form from "./Form";
import "./Box.css";
class Box extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="DifFlexCenter">
          <div className="Box">
            <Form />
          </div>
          <div className="Box2"></div>
        </div>
      </>
    );
  }
}

export default Box;
