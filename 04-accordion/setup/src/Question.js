import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import "./Question.css";

const Question = ({ question }) => {
  const { id, title, info } = question;
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <div className='title'>
        <h4>{title}</h4>
        <div onClick={toggleOpen}>{isOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}</div>
      </div>
      {isOpen ? <div><p>{info}</p></div> : null}
    </div>
  );
};

export default Question;
