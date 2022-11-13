import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ question }) => {
  const [showAll, setShowAll] = useState(false);
  const showAllHandler = () => {
    setShowAll((prev) => !prev);
  };
  return (
    <article>
      <h4>{question.title}</h4>

      <button onClick={showAllHandler}>
        {showAll ? <AiOutlineMinus /> : <AiOutlinePlus />}
      </button>

      {showAll ? <p> {question.info} </p> : null}
    </article>
  );
};

export default Question;
