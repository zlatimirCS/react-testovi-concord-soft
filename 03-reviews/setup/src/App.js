import React from "react";
import Review from "./Review";

import styles from "./app.module.scss";

function App() {
  return (
    <div className={styles.main_wrapper}>
      <div className={styles.main_container}>
        <div className={styles.main_headline_container}>
          <h2 className={styles.main_headline}>Our Reviews</h2>
          <div className={styles.main_headline_underline}></div>
        </div>
        <Review />
      </div>
    </div>
  );
}

export default App;
