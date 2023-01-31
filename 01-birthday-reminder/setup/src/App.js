import React from "react";
import data from "./data";
import List from "./List";

// Style
import "./index.css"

function App() {
  
  return (
    <main>
      <section className="container">
        <List data={data} />
      </section>
    </main>
  )
}

export default App;
