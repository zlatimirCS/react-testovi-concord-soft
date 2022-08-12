import React from "react";

import styles from "./layout.module.scss";

function Layout(props) {
  return (
    <div className={styles.layout_main_wrapper}>
      <main>{props.children}</main>
    </div>
  );
}

export default Layout;
