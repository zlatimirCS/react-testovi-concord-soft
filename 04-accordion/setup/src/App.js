import React from "react";
import data from "./data";
import styles from "./app.module.scss";
import Question from "./Question";
function App() {
  return (
    <div className={styles.main}>
      <div className={styles.main_wrapper}>
        <div className={styles.main_container}>
          <div className={styles.headline}>
            <h3>questions and answers about login</h3>
          </div>
          <div className={styles.question_container}>
            {/* map sequence start */}
            {data.map((quetion) => {
              return <Question key={quetion.id} question={quetion} />;
            })}
            {/* map sequence end */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
