import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card } from "react-bootstrap";
import "./admin.css";
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
        <h1>Hi {this.props.dataadmin.nama}</h1>
        {/* <button onClick={this.logout}>Logout</button> */}
        <Button variant="danger" onClick={this.logout}>
          Logout
        </Button>
        <div className="cardsiswa">
          {this.props.data.map((value, index) => {
            return (
              <Card style={{ width: "18rem" }} key>
                <Card.Img variant="top" src={value.foto} />
                <Card.Body>
                  <Card.Title>{(index + 1, value.nama)}</Card.Title>
                  <Card.Text>{value.moto}</Card.Text>
                  <a
                    href={value.linkgit}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="primary">Github</Button>
                  </a>
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
