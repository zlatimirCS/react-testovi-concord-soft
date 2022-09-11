import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import styles from "./question.module.scss";
const Question = (props) => {
  const [visibleQuestion, setVisibleQuestion] = useState(false);

  function visibleQUbutton() {
    if (visibleQuestion) {
      setVisibleQuestion(false);
    } else {
      setVisibleQuestion(true);
    }
  }
  return (
    <div className={styles.question_item_container}>
      <div className={styles.item_headline_container}>
        <div className={styles.item_headline}>
          <h4>{props.question.title}</h4>
        </div>
        <div className={styles.item_button} onClick={visibleQUbutton}>
          {visibleQuestion ? (
            <AiOutlineMinus className={styles.btnbtn} />
          ) : (
            <AiOutlinePlus className={styles.btnbtn} />
          )}
        </div>
      </div>
      {visibleQuestion ? (
        <div className={styles.question_item_answer}>
          <p>{props.question.info}</p>
        </div>
      ) : null}
    </div>
  );
};

export default Question;
