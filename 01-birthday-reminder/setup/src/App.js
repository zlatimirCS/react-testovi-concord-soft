import React, { useState } from "react";
import BirthdayList from "./component/BirthList";
import data from "./data";
import List from "./List";
function App() {
  return (
    <div>
      <BirthdayList data={data} />
    </div>
  );
}

export default App;
