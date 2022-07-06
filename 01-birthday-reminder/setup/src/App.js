import React, { useState } from "react";
import data from "./data";
import List from "./ListItem";

function App() {
  const [people, setPeople] = useState(data);

  const clearData = () => {
    setPeople([]);
  };

  const person = people.map((item) => {
    return (
      <List id={item.id} image={item.image} name={item.name} age={item.age} />
    );
  });
  return (
    <main className="">
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        {person}
        <button onClick={clearData}>clear all</button>
      </section>
    </main>
  );
}

export default App;
