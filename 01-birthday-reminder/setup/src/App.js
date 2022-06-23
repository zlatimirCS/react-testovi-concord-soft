import React, { useState } from "react";
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
}

export default App;
