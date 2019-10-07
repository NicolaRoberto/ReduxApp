import React, { Component } from "react";
import { Button, FormControl } from "react-bootstrap";
import { addUser, removeUser } from "../actions/Users";
import { connect } from "react-redux";

class AddUser extends Component {
  state = {
    users: []
  };

  handleSubmit = e => {
    e.preventDefault();

    let newUser = {
      id: 3,
      cognome: "",
      nome: ""
    };

    addUser(newUser);
  };


  render() {
    return (
      <div>
        <h1>Aggiungi Utente</h1>
        <p>Inserisci i dati all'interno del form</p>
        <br />
        <FormControl placeholder="Nome" />
        <FormControl placeholder="Cognome" />
        <FormControl placeholder="Età" />
        <br />
        <Button className="col-sm-6" onClick={this.handleSubmit}>Aggiungi</Button>
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
