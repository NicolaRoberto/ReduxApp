import React, { Component } from "react";
import { Button, Col, Row } from "react-bootstrap";

class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.goBackToList = this.goBackToList.bind(this);
  }

  goBackToList = () => {
    this.props.history.push(`/users`);
  };

  render() {
    return (
      <Col sm={12}>
        <Row>
        <Col sm={12}>
          <h1>Dettagli utente</h1>
          </Col>
        </Row>
        <br />
        <Row>
        <Col sm={12}>
          <h5>
            Id Utente: 1
            <br />
            Nome: Nicola
            <br />
            Cognome: Castello
            <br />
            Email: nicola@email.com
          </h5>
          </Col>
        </Row>
        <Row>
        <Col sm={12}>
          <Button className="btn btn-sm" onClick={this.goBackToList}>
            {"<--"} Torna alla lista
          </Button>
          </Col>
        </Row>
      </Col>
    );
  }
}

export default UserDetails;
