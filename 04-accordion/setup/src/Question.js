import React, { useState } from 'react';
import SingleQuestion from './SingleQuestion.js';

const Question = ({ questions }) => {
  return (
    <section>
      {questions.map((question) => {
        console.log(question.id);
        return <SingleQuestion key={question.id} {...question} />;
      })}
    </section>
  );
};

export default Question;
