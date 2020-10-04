import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card } from "react-bootstrap";
import "./admin.css";
import Menu from "./Menu";
// const tes = ({ match }) => console.log(`match`, match) || <div>tes</div>;
class HalamanAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  logout = () => {
    this.props.floginadmin(false);
    console.log(this.props.loginadmin);
  };

  cegah = () => {
    if (this.props.loginadmin === false) {
      return <Redirect to="/Admin" />;
    }
  };

  delete = () => {};
  //loopcard = () => {
  // this.props.data.map((value, index) => {
  //   return (
  //     <Card style={{ width: "18rem" }} key>
  //       <Card.Img variant="top" src={value.foto} />
  //       <Card.Body>
  //         <Card.Title>
  //           {index + 1}
  //           {value.nama}
  //         </Card.Title>
  //         <Card.Text>{value.moto}</Card.Text>
  //         <Button variant="primary" onClick={this.tes}>
  //           Go somewhere
  //         </Button>
  //       </Card.Body>
  //     </Card>
  //   );
  // });
  // };

  tes = () => {
    console.log(this.props);
  };
  render() {
    // console.log(this.props.match.params.dataadmin);

    return (
      <>
        <div className="header">
          <ul>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "white",
                alignItems: "center",
              }}
            >
              <Menu>Beranda</Menu>
            </Link>
            <Link
              to="/Register"
              style={{ textDecoration: "none", color: "white" }}
            >
              <Menu>Input Karyawan</Menu>
            </Link>
          </ul>
          <ul>
            <Menu>
              <Button variant="danger" onClick={this.logout}>
                Logout
              </Button>
            </Menu>
          </ul>
        </div>

        <h1>Hi HRD {this.props.dataadmin.nama}</h1>
        {/* <button onClick={this.logout}>Logout</button> */}

        <div className="cardsiswa">
          {this.props.data.map((value, index) => {
            return (
              <Card style={{ width: "18rem" }} key>
                <Card.Img variant="top" src={value.foto} />
                <Card.Body>
                  <Card.Title>{(index + 1, value.nama)}</Card.Title>
                  <Card.Text>{value.moto}</Card.Text>
                  <Card.Text>{value.divisi}</Card.Text>

                  <a
                    href={value.linkgit}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="primary">Github</Button>
                  </a>
                  <br />
                  <br />
                  <Button variant="primary" onClick={this.Edit}>
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => {
                      alert("Yakin Menghapus?");
                      this.props.ubahdata({
                        data: this.props.data.splice(index, 1),
                      });

                      return;
                    }}
                  >
                    Delete
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
          {/* <img src="./Rifki.jpg" /> */}
        </div>

        {/* {this.loopcard()} */}
        {/* <button onClick={this.tes}>Tes</button> */}
        {this.cegah()}
      </>
    );
  }
}

export default HalamanAdmin;
