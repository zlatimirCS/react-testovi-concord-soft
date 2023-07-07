import React, { useEffect } from 'react';
import "./Categories.css";

const Categories = ({ setFilter }) => {
  const categories = ['All', 'breakfast', 'lunch', 'shakes'];

  useEffect(() => {
    setFilter('all');
  }, [setFilter]);

  const filterCategory = (category) => {
    setFilter(category === 'all' ? '' : category.toLowerCase());
  };

  return (
    <div>
      {categories.map((category, index) => (
        <button key={index} onClick={() => filterCategory(category)}>
          
          {category.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default Categories;
