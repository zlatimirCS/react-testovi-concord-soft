import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="error">
      <h2 className="main-title">Oops! It's a dead end</h2>
      <Link className="btn btn-primary" to="/">
        back home
      </Link>
    </div>
  );
};

export default Error;
