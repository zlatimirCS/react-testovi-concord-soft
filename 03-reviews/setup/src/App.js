import React from "react";
import Review from "./Review";

import styles from "./app.module.scss";

import Layout from "./components/Layout/Layout";

function App() {
  return (
    <Layout>
      <div className={styles.main_wrapper}>
        <div className={styles.sescond_child}></div>
        <div className={styles.grid_child}>
          <div className={styles.main_headline_container}>
            <h2 className={styles.main_headline}>Our Rewievs</h2>
            <div className={styles.main_headline_underline}></div>
          </div>
          <Review />
        </div>
        <div className={styles.third_child}></div>
      </div>
    </Layout>
  );
}

export default App;
