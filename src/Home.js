import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h3>Dashboard</h3>
      <div>
        <Link to="/generate">
          <Button variant="outline-primary">Generate</Button>
        </Link>
      </div>
      <div>
        <Link to="/decode">
          <Button variant="outline-info">Decode</Button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
