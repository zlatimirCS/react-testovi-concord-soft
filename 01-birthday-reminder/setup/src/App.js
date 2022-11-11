import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [people, setPeople] = useState(data);
  return (
    <div className="app">
      <h3 className="title">{people.length} birthdays today </h3>
      <List people={people} />
      <button className="btn" onClick={() => setPeople([])}>
        Clear All
      </button>
    </div>
  );
}

export default App;
