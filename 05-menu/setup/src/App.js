import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import Title from './Title.js';
import items from './data';
import './index.css';
import menu from './data';
//unique categories
const categories = items.map((item) => item.category);
const newCategories = ['all', ...new Set(categories)];
console.log(newCategories);

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(newCategories);

  const hendleFilter = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section>
        <Title />
        <Categories newCategories={categories} hendleFilter={hendleFilter} />
        <Menu itemss={menuItems} />
      </section>
    </main>
  );
}

export default App;
