import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../logo.svg";

const Navbar = () => {
  let navigate = useNavigate();
  const goHome = () => {
    navigate("/");
  };
  return (
    <header>
      <img src={logo} alt="logo" width={100} height={50} onClick={goHome} />
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
};

export default Navbar;
