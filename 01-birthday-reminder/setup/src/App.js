import React, { useState } from "react";
import data from "./data";
import List from "./List";

function App() {
  const person = data.map((item) => {
    return (
      <List id={item.id} image={item.image} name={item.name} age={item.age} />
    );
  });
  return (
    <main className="">
      <section className="container">
        <h3>5 birthdays today</h3>
        {person}
        <button>clear all</button>
      </section>
    </main>
  );
}

export default App;
