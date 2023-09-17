import React, { useState } from 'react';
import data from './data';
import './index.css';
import Question from './Question';

function App() {
  const [questions, setQuestions] = useState(data);
  console.log(questions);
  return (
    <main>
      <div className='container'>
        <h3>Questions And Answers About Login</h3>
        <Question questions={questions}></Question>
      </div>
    </main>
  );
}

export default App;
