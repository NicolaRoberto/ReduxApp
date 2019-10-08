import React, { Component } from "react";
import { Button, Form, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { addUser, removeUser } from '../actions/actions';

class AddUser extends Component {
  constructor(props){
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  state = {
    users: []
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.history.push("/users")
  };

  render() {
    return (
      <div>
        <h1>Aggiungi Utente</h1>
        <p>Inserisci i dati dell'utente</p>
        <br />

        <Form className="col-sm-12">
        <Form.Group as={Row} controlId="formSurname">
              <Form.Control className="col-sm-4" type="text" placeholder="Cognome" />
          </Form.Group>

          <Form.Group as={Row} controlId="formName">
              <Form.Control className="col-sm-4" type="text" placeholder="Nome" />
          </Form.Group>

          <Form.Group as={Row} controlId="formEmail">
              <Form.Control className="col-sm-4" type="email" placeholder="Email" />
          </Form.Group>

          <Form.Group as={Row} controlId="formPassword">
              <Form.Control className="col-sm-4" type="password" placeholder="Password" />
          </Form.Group>

          <Form.Group as={Row}> 
            <Button className="col-sm-4" type="submit" onClick={this.handleSubmit}>Aggiungi</Button>
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
  addUser: () => dispatch(addUser),
  removeUser: () => dispatch(removeUser)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddUser);
