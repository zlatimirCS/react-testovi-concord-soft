import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../logo.svg";

const Navbar = () => {
  let navigate = useNavigate();
  const goHome = () => {
    navigate("/");
  };
  return (
    <header className="app-header-container">
      <div className="app-header">
        <img src={logo} alt="logo" onClick={goHome} />
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
