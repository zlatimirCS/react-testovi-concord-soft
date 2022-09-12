import React from "react";
import BirthdayList from "./component/BirthList";
import data from "./data";
function App() {
  return (
    <div>
      <BirthdayList data={data} />
    </div>
  );
}

export default App;
