import React from "react";
import styles from "./categories.module.scss";

const Categories = (props) => {
  const items = props.menus;

  const category = items.map((menu) => {
    return menu.category;
  });

  const uniqueCategory = [...new Set(category)];

  return (
    <div className={styles.category_main_wrapper}>
      <div className={styles.category_main_container}>
        <div className={styles.category_item}>
          <button type="button" onClick={props.newMenu}>
            all
          </button>
        </div>
        {uniqueCategory.map((cat) => {
          return (
            <div key={cat} className={styles.category_item}>
              <button type="button" value={cat} onClick={props.newMenu}>
                {cat}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
