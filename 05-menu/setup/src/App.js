import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";
import styles from "./app.module.scss";

function App() {
  return (
    <main className={styles.main_wrapper}>
      <div className={styles.main_container}>
        <div className={styles.main_headline_container}>
          <div className={styles.headline}>
            <h2>our menu</h2>
          </div>
          <div className={styles.underline}></div>
        </div>
        <Categories />
      </div>
    </main>
  );
}

export default App;
