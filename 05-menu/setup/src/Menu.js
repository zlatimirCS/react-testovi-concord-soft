import React from "react";
import styles from "./menu.module.scss";

const Menu = (props) => {
  return props.menus.map((a) => {
    return (
      <div key={a.id} className={styles.menu_container}>
        <div className={styles.menu_item}>
          <div className={styles.menu_item_img}>
            <img src={a.img} alt={a.title} />
          </div>
          <div className={styles.menu_item_info_container}>
            <div className={styles.menu_item_info_header}>
              <h4>{a.title}</h4>
              <p>{a.price}</p>
            </div>
          </div>
        </div>
      </div>
    );
  });
};

export default Menu;
