import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

export default class Decode extends Component {
  state = {
    code: "",
  };

  render() {
    return (
      <div>
        <h3>Decode</h3>
        <div>
          <Link to="/">
            <Button variant="outline-primary">Back to Home</Button>
          </Link>
        </div>
      </div>
    );
  }
}
