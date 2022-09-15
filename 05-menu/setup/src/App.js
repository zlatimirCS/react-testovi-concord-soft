import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";
import styles from "./app.module.scss";

function App() {
  const [menu, setMenu] = useState(items);
  const [filteredMenu, setFilteredMenu] = useState([]);

  function newMenuArry(category) {
    if (category.target.value === "") {
      setMenu(
        items.filter((item) => {
          return item.category !== category.target.value;
        })
      );
    } else {
      setMenu(
        items.filter((item) => {
          return item.category === category.target.value;
        })
      );
    }
  }

  return (
    <main className={styles.main_wrapper}>
      <div className={styles.main_container}>
        <div className={styles.main_headline_container}>
          <div className={styles.headline}>
            <h2>our menu</h2>
          </div>
          <div className={styles.underline}></div>
        </div>
        <Categories menus={items} newMenu={newMenuArry} />
      </div>
      <div className={styles.manu_item_wrapper}>
        <Menu menus={menu} />
      </div>
    </main>
  );
}

export default App;
