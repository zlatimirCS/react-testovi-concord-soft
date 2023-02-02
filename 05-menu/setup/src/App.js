import React, { useState, useEffect } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  const [navItems, setNavItems] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  const [menuFilter, setMenuFilter] = useState();

  useEffect(() => {
    let navArr = ["all"];
    items.forEach(i => {
      if(!navArr.includes(i.category)) {
        navArr.push(i.category);
      }
    });
    setNavItems(navArr);
  }, [])

  useEffect(() => {
    if(!menuFilter || menuFilter === "all") {
      setMenuItems(items);
    } else {
      let tempArr = [];
      items.forEach(i => {
        if(i.category === menuFilter) {
          tempArr.push(i);
        }
      })
      setMenuItems(tempArr);
    }
  }, [menuFilter]);

  return (
    <main>
      <section>
        <div className="container">
          <div className="menu-title">
            <h1>Our Menu</h1>
            <div className="menu-line"></div>
          </div>
          <Categories categories={navItems} onFilter={setMenuFilter} />
          <Menu items={menuItems} />
        </div>
      </section>
    </main>
  );
}

export default App;
