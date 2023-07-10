import React from "react";
import data from "./data";
import List from "./List";
import "./App.css";

const App = () => {
  return (
    <section className="container">
      <List people={data} />
    </section>
  );
};

export default Appp;
