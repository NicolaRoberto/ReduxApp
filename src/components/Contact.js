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
          <h5>Leave us a message!</h5>
          <br />
        <InputGroup className="col-6 mb-2">
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1">Example</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>

        <InputGroup className="col-sm-6 mb-2">
        <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon2">Example</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            placeholder="Email"
            aria-label="Email"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Append>
            <InputGroup.Text id="basic-addon2">@gmail.com</InputGroup.Text>
          </InputGroup.Append>
        </InputGroup>

        <Button className="col-sm-3" onClick={this.onSubmit}>Submit</Button>
      </form>
    );
  }
}

export default Contact;
