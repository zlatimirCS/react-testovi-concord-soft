import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Question = (props) => {

  const [isOpened, setIsOpened] = useState(false);
  const questionObject = props.data

  const toggle = () => {
    setIsOpened(!isOpened);
  }

  return (
    <article className="question">
      <header>
        <h4>{questionObject.title}</h4>
        <button className="btn" onClick={toggle} >{isOpened ? <AiOutlineMinus /> : <AiOutlinePlus />}</button>
      </header>
      {isOpened &&
        <p>{questionObject.info}</p>
      }
    </article>
  );
};

export default Question;
