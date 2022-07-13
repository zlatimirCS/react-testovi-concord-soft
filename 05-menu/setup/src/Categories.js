import React from 'react';

const Categories = (props) => {
  const categoriesList = props.categoriesList;

  const renderButtons = () => {
    return categoriesList.map(category => {
      return (<button key={category} className='filter-btn' onClick={() => { props.onSelectCategory(category) }}>{category}</button>)
    })
  }

  return (
    <div className='btn-container'>
      <button className='filter-btn' onClick={() => { props.onSelectCategory("all") }}>All</button>
      {renderButtons()}
    </div>
  )
};

export default Categories;
