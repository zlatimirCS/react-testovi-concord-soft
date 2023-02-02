import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = (props) => {
  const [accStatus, setAccStatus] = useState(false);

  const toggleAccordion = () => {
    setAccStatus(prevStatus => !prevStatus)
  }

  return (
    <div className='question-box'>
      <button className='accordion-button' onClick={toggleAccordion}>
        {!accStatus && <AiOutlinePlus />}
        {accStatus && <AiOutlineMinus />}
      </button>
      <h4>{props.question.title}</h4>
      <div className={`accordion-text ${accStatus ? "active" : ""}`}>
        {props.question.info}
      </div>
    </div>
  )
};

export default Question;
