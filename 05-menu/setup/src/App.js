import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [foodList, setFoodList] = useState(items);

  const uncompressedCategories = items.map(menuItem => {
    return menuItem.category;
  })

  const compressedCategoriesSET = new Set(uncompressedCategories);
  const individualCategoriesList = Array.from(compressedCategoriesSET);

  const filterMenu = (kategorija) => {
    if (kategorija === "all") {
      setFoodList(items);
    } else {
      const newList = items.filter((item) => {
        if (item.category === kategorija) {
          return true
        } else {
          return false
        }
      })
      setFoodList(newList)
    }
  }

  return (
    <main>
      <section className='menu section'>
        <div className="title">
          <h2>Our Menu</h2>
          <div className='underline'></div>
        </div>
        <Categories categoriesList={individualCategoriesList} onSelectCategory={(category) => { filterMenu(category) }} />
        <Menu data={foodList} />
      </section>
    </main>
  );
}

export default App;
