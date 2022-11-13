import { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
  return (
    <main>
      <section className="container">
        <div className="title">questions and answers about login</div>
        <div className="questions-container">
          {data.map((question) => {
            return <SingleQuestion question={question} />;
          })}
        </div>
      </section>
    </main>
  );
}

export default App;
