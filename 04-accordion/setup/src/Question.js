import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ question }) => {
  const [showAll, setShowAll] = useState(false);
  const showAllHandler = () => {
    setShowAll((prev) => !prev);
  };
  return (
    <article className="question">
      <div className="question-header">
        <h4>{question.title}</h4>
        <button className="btn" onClick={showAllHandler}>
          {showAll ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </div>
      {showAll ? <p className="info"> {question.info} </p> : null}
    </article>
  );
};

export default Question;
