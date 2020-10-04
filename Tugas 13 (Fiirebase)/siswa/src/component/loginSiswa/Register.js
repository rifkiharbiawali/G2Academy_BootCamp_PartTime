import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import firebase from "../../firebase";
import "./register.css";
import { connect } from "react-redux";
import { ubahUser } from "../../redux/action";
// import { Link } from "react-router-dom";
// import LoginSiswa from ".";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nama: "",
      moto: "",
      linkgit: "",
      foto: "",
      email: "",
      password: "",
      dataUser: [],
      idUser: "",
    };
    // this.kirimData = this.kirimData.bind(this);
  }
  changeState = (berubah) => {
    let nama = berubah.target.name;
    let nilai = berubah.target.value;
    this.setState({
      [nama]: nilai,
    });
  };

  register = async () => {
    const { email, password } = this.state;
    const array = this.state.dataUser;
    await this.setState({
      dataUser: [
        ...array,
        {
          nama: this.state.nama,
          moto: this.state.moto,
          linkgit: this.state.linkgit,
          foto: this.state.foto,
          email: this.state.password,
        },
      ],
    });

    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async (respon) => {
        await this.setState({
          idUser: respon.user.uid,
        });
        await this.props.kirimData(this.state.idUser);
        console.log(this.state.idUser);
        console.log(respon.user.uid);
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ...
      });
    // let string = JSON.stringify(this.state.dataUser);
    // let random = Math.floor(Math.random() * 10000 + 1);
    console.log(this.props.DataUser);
    firebase
      .database()
      .ref("Register/" + this.state.idUser)
      .set({
        nama: this.state.nama,
        moto: this.state.moto,
        linkgit: this.state.linkgit,
        foto: this.state.foto,
        email: this.state.email,
      });
    // const { email, password } = this.state;
    // this.props.firebase.register();
  };

  tes = async () => {
    // let id = 1;
    // for (let i = 0; i < 10; i++) {
    //   id += i;
    // }
    // await this.setState({
    //   dataUser: [
    //     {
    //       nama: this.state.nama,
    //       moto: this.state.moto,
    //     },
    //   ],
    // });
    console.log(this.props.DataUser);
    // this.props.kirimData(this.state.dataUser);
  };
  render() {
    return (
      <div className="box">
        <div className="form">
          <center>
            <h3>Silahkan Register</h3>
          </center>
          <Form>
            <Form.Group>
              <Form.Label>Nama Lengkap</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nama Lengkap"
                onChange={this.changeState}
                name="nama"
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Moto</Form.Label>
              <Form.Control
                type="text"
                placeholder="Moto"
                onChange={this.changeState}
                name="moto"
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Link Github</Form.Label>
              <Form.Control
                type="text"
                placeholder="Link Github"
                onChange={this.changeState}
                name="linkgit"
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Foto</Form.Label>
              <Form.Control
                type="file"
                placeholder=""
                onChange={this.changeState}
                name="foto"
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={this.changeState}
                name="email"
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={this.changeState}
                name="password"
              />
            </Form.Group>

            <center>
              {/* <Link to={LoginSiswa}> */}
              <Button variant="primary" type="button" onClick={this.register}>
                Register
              </Button>

              <Button variant="primary" type="button" onClick={this.tes}>
                tes1:
              </Button>
              {/* </Link> */}
            </center>
          </Form>
        </div>
      </div>
    );
  }
}

const reduxState = (state) => ({
  DataUser: state.kirimDataUser.dataUser,
});

const despetchRedux = (dispetch) => ({
  kirimData: (localState) => dispetch(ubahUser(localState)),
});
export default connect(reduxState, despetchRedux)(Register);
// export default Register;
