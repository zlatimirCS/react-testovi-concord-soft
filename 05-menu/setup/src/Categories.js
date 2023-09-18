import React from 'react';

const Categories = ({ newCategories, hendleFilter }) => {
  console.log(newCategories);
  return (
    <div className='filter-container'>
      {newCategories.map((category) => {
        return (
          <button
            key={category}
            type='button'
            className='btn-filter'
            onClick={() => hendleFilter(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
