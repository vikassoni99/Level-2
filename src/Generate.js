import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

export default class Generate extends Component {
  state = {
    code: "",
  };

  render() {
    return (
      <div>
        <h3>Generate</h3>
        <div>
          <Link to="/">
            <Button variant="outline-primary">Back to Home</Button>
          </Link>
        </div>
      </div>
    );
  }
}
