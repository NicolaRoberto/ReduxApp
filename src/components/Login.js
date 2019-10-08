import React, { Component } from "react";
import { Button, Form, Row } from "react-bootstrap";
import { connect } from "react-redux";
import "../index.css";

class Login extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  state = {
    users: []
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.history.push("/home");
  };

  render() {
    return (
      <div className="login">
        <Form className="col-sm-12">
          <br />
          <h1 className="text-center">Redux App</h1>
          <br />
          <Form.Group as={Row} controlId="formEmail">
            <Form.Control
              className="col-sm-12"
              type="email"
              placeholder="Email"
            />
          </Form.Group>

          <Form.Group as={Row} controlId="formPassword">
            <Form.Control
              className="col-sm-12"
              type="password"
              placeholder="Password"
            />
          </Form.Group>

          <Form.Group as={Row}>
            <Button
              className="col-sm-12"
              type="submit"
              onClick={this.handleSubmit}
            >
              LOGIN
            </Button>
          </Form.Group>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state,
  users: state.users
});

const mapDispatchToProps = dispatch => ({
  //   addUser: () => dispatch(addUser),
  //   removeUser: () => dispatch(removeUser)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
