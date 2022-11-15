import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <h2>Oops!</h2>
      <Link to="/">back home</Link>
    </div>
  );
};

export default Error;
