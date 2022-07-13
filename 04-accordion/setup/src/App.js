import React, { useState } from "react";
import data from "./data";
import Question from "./Question";

function App() {
  const questions = data;

  const renderQuestions = () => {
    return questions.map((questionObject) => {
      return <Question key={questionObject.id} data={questionObject} />;
    });
  };

  return (
    <main>
      <div className="container">
        <h3>Questions And Answers About Login</h3>
        <section>{renderQuestions()}</section>
      </div>
    </main>
  );
}

export default App;
