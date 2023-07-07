import React, { useState } from 'react';
import Categories from './Categories';
import "./Menu.css";

const Menu = ({ items }) => {
  const [filter, setFilter] = useState('');

  const filteredItems = items.filter((item) => {
    if (filter === "all") {
      return true;

    } else {
      return item.category.toLowerCase() === filter.toLowerCase();
    }
  });

  return (
    <div>
            <Categories setFilter={setFilter} />

    <div className='menuMenu'>
      {filteredItems.map((item) => (
        <div className='mainMenu'>
        <div key={item.id}>
          <div className='mainMenuImg'>
            <img src={item.img} alt={item.title} />
          </div>
          <div className='contentMenu'>
            <div className='headingpr'><h3>{item.title}</h3><p>${item.price}</p></div>
            <div className='linehr'></div>
            <p>{item.desc}</p>
          </div>
          </div>
        </div>
      ))}
    </div>
    </div>

  );
}

export default Menu;
