import React, { Component } from "react";
import { Button, InputGroup, FormControl } from "react-bootstrap";

class Contact extends Component {
  onSubmit = () => {
    this.props.history.push("/");
  };

  render() {
    return (
      <form>
          <h1>Contact Us</h1>
          <p>Leave us a message!</p>
          <br />
        <InputGroup className="col-3 mb-2">
          <FormControl
            placeholder="Nome"
            aria-label="Nome"
            aria-describedby="basic-addon1"
          />
        </InputGroup>

        <InputGroup className="col-3 mb-2">
          <FormControl
            placeholder="Cognome"
            aria-label="Cognome"
            aria-describedby="basic-addon1"
          />
        </InputGroup>

        <InputGroup className="col-sm-3 mb-2">
          <FormControl
            placeholder="Età"
            aria-label="Età"
            aria-describedby="basic-addon2"
          />
        </InputGroup>

        <Button className="col-sm-3" onClick={this.onSubmit}>Submit</Button>
      </form>
    );
  }
}

export default Contact;
