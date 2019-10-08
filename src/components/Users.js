import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { actionCreators } from "../store/Users";

class Users extends Component {
  state = {
    users: [
      {
        id: 1,
        nome: "Nicola",
        cognome: "Castello",
        email: "nicola@email.com",
        password: "pass1"
      },
      {
        id: 2,
        nome: "Gabriele",
        cognome: "Consoli",
        email: "gabriele@email.com",
        password: "pass2"
      }
    ]
  };

  showDetails = () => {
    console.log("this.props: ", this.props);
    this.props.history.push(`/userDetails/${1}`);
  }

  render() {
    return (
      <Row>
        <Col sm={12}>
          <h1>Lista Utenti</h1>

          <p>Seleziona un utente per visualizzare il dettaglio</p>

          <br />
          {this.state.users.map(user => {
            return (
              <Row className="mb-3 table-bordered col-sm-6">
                <div className="col-sm-10">
                  {user.nome + " " + user.cognome}
                  <br />
                  {"Email: " + user.email}
                </div>
                <div className="col-sm-2">
                  <Button className="btn btn-sm" onClick={this.showDetails}>
                    Dettagli
                  </Button>
                </div>
              </Row>
            );
          })}
        </Col>
      </Row>
    );
  }
}

export default connect(
  state => state.users,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(Users);
