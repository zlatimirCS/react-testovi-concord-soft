import React from "react";
import BirthdayList from "./component/BirthList";
import data from "./data";

import styles from "./app.module.scss";
function App() {
  return (
    <div className={styles.main_wrapper}>
      <BirthdayList data={data} />
    </div>
  );
}

export default App;
