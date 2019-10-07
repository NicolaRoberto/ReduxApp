import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import AddUser from "./AddUser";
import { Row, Col } from "react-bootstrap";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { actionCreators } from "../store/Users";

const User = state => <p>{console.log("match.params", state)}</p>;

class Users extends Component {
  state = {
    users: [
      { id: 1, nome: "Nicola", cognome: "Castello", age: 31 },
      { id: 2, nome: "Gabriele", cognome: "Consoli", age: 32 }
    ]
  };

  addUser = user => {
    user = {
      id: this.state.users.length + 1,
      nome: "Roberto",
      cognome: "Castello",
      eta: 31
    };

    let users = [...this.state.users, user];

    this.setState({
      users: users
    });
  };

  deleteUser = id => {
    let users = this.state.users.filter(user => {
      return user.id !== id;
    });

    this.setState({
      users: users
    });
  };

  render() {
    return (
      <Row>
        <Col sm={6}>
          <AddUser />
        </Col>
        <Col sm={6}>
          <h1>Lista Utenti</h1>

          <p>Seleziona un utente per visualizzare il dettaglio</p>

          <br />
          <ul>
            {this.state.users.map(user => {
              return (
                <li>
                  <Link to="/users/1">
                    {user.nome + " " + user.cognome + " - Età: " + user.age}
                  </Link>
                </li>
              );
            })}
          </ul>

          <br />

          <Route path="/users/:id" component={User} />
          <Route path="/addUser" component={AddUser} />
        </Col>
      </Row>
    );
  }
}

export default connect(
  state => state.users,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(Users);
