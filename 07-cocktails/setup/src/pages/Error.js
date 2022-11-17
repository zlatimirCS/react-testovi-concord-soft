import React from "react";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import { useGlobalContext } from "../context";

const Error = () => {
  const { isLoading } = useGlobalContext();
  if (isLoading) {
    <Loading />;
  }
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
