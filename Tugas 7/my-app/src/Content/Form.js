import React, { Component } from "react";
import "./Form.css";
class Form extends Component {
  bantuan = () => {
    alert("Tekan Tombol Masuk untuk Print Karcis");
    // document.p.write("<p>Tekan Tombol Masuk untuk Print Karcis</p>");
  };

  // masuk = () => {
  //   var ambil = document.getElementById("FormP");
  // };
  //   this.ambil.addEventListener("submit", (event) => {
  //     event.preventDefault();
  //     let a = document.getElementById("A");
  //     let b = document.getElementById("B");
  //     let c = document.getElementById("C");
  //     let data = { No: `${a.value}${b.value}${c.value}` };
  //     let st = JSON.stringify(data);
  //     let set = localStorage.setItem("dataParkir", st);
  //   });

  state = {};
  render() {
    return (
      <>
        <form className="FormP">
          <label for="A">No Plat Kendaraan</label>
          <br />
          <input
            id="A"
            type="text"
            maxLength="2"
            style={{ width: "25px" }}
            placeholder="B"
          />
          <input
            id="B"
            type="text"
            maxLength="2"
            style={{ width: "60px" }}
            placeholder="1234"
          />
          <input
            id="C"
            type="text"
            maxLength="2"
            style={{ width: "35px" }}
            placeholder="CEK"
          />
          <input id="submit" type="submit" value="Masuk" />
          <input
            id="C"
            type="button"
            value="Tombol Bantuan"
            onClick={this.bantuan}
          />
        </form>
      </>
    );
  }
}

export default Form;
