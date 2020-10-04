import React, { Component } from "react";
import { Button, Form, Card } from "react-bootstrap";
import "./register.css";
class HalamanAdmin extends Component {
  render() {
    return (
      <div className="box">
        <div className="form">
          <center>
            <h3>Input Siswa</h3>
          </center>
          <Form>
            <Form.Group>
              <Form.Label>Nama Lengkap</Form.Label>
              <Form.Control type="text" placeholder="Nama Lengkap" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Moto</Form.Label>
              <Form.Control type="text" placeholder="Moto" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Link Github</Form.Label>
              <Form.Control type="text" placeholder="Link Github" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Foto</Form.Label>
              <Form.Control type="file" placeholder="" />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <center>
              <Button variant="primary" type="button">
                Register
              </Button>
            </center>
          </Form>
        </div>
        <div className="card">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}

export default HalamanAdmin;
