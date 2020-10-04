import React, { Component } from "react";

class TabelAnak extends Component {
  state = {};
  render() {
    return (
      <>
        <table>
          <thead>
            <tr>
              <th>No.</th>
              <th>Nama</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {this.props.Data.map((value, index) => {
              return (
                <tr key>
                  <td>{index + 1}</td>
                  <td>{value.Nama}</td>
                  <td>{value.Email}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
}

export default TabelAnak;
