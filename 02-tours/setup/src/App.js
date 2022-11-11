import { useState, useEffect } from "react";
import Loading from "./Loading.js";
import Tours from "./Tours.js";

const url = "https://course-api.com/react-tours-project";

function App() {
  return (
    <>
      <h2 className="test">Tours Project Setup</h2>
      <Loading />
      <Tours />
    </>
  );
}

export default App;
