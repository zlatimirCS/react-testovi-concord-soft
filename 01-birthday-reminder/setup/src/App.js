import React, { useState } from "react";
<<<<<<< HEAD
import BirthdayList from "./component/BirthList";
import data from "./data";
import List from "./List";
function App() {
  const [people, setPeople] = useState(data);

  return (
    <div>
      <BirthdayList data={people} />
    </div>
  );
=======
import data from "./data";
import List from "./List";
function App() {
  return <h2 className="test">Birthday reminder project setup, asdf </h2>;
>>>>>>> origin/main
}

export default App;
