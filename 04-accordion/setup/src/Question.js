import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import styles from "./question.module.scss";
const Question = (props) => {
  const [visibleQuestion, setVisibleQuestion] = useState(false);
  // outline plus replacement
  const AiOutlinePlusReplacement = (props) => {
    const {
      props: {
        attr: { pId, ...rest },
        children: [defs, ...paths],
      },
    } = AiOutlinePlus();

    const SAFE_PATHS = paths.map(
      ({ type, props: { pId: pathId, ...pathProps } }) =>
        React.createElement(type, pathProps)
    );
    const SAFE_CHILDREN = React.Children.toArray([defs, ...SAFE_PATHS]);
    const SAFE_PROPS = { attr: rest, ...props };

    return React.cloneElement(AiOutlinePlus(), SAFE_PROPS, SAFE_CHILDREN);
  };
  // outline plus replacement end

  // outline minus desplacement
  const AiOutlineMinusReplacement = (props) => {
    const {
      props: {
        attr: { pId, ...rest },
        children: [defs, ...paths],
      },
    } = AiOutlineMinus();

    const SAFE_PATHS = paths.map(
      ({ type, props: { pId: pathId, ...pathProps } }) =>
        React.createElement(type, pathProps)
    );
    const SAFE_CHILDREN = React.Children.toArray([defs, ...SAFE_PATHS]);
    const SAFE_PROPS = { attr: rest, ...props };
    return React.cloneElement(AiOutlineMinus(), SAFE_PROPS, SAFE_CHILDREN);
  };
  // outline minus desplacement end

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
            <AiOutlineMinusReplacement className={styles.btnbtn} />
          ) : (
            <AiOutlinePlusReplacement className={styles.btnbtn} />
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
