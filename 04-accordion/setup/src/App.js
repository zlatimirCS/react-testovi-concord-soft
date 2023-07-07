import React, { useState } from 'react';
import data from './data';
import Question from './Question';
import "./App.css";

function App() {
  return (
    <div className='main-content'>
      <div className='head'>
        <h1>Question And Answers About Login</h1>
      </div>
    <div>
      {data.map((question) => (
        <div className='question'><Question key={question.id} question={question} /></div>
      ))}
    </div>
    </div>
  );
}

export default App;
