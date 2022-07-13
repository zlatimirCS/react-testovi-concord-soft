import React from 'react';

const Menu = (props) => {
  const foodItems = props.data;
  return (
    <div className='section-center'>
      {foodItems.map(foodObject => {
        return (
          <article key={foodObject.id} className='menu-item'>
            <img className='photo' src={foodObject.img} alt={foodObject.title} />
            <div className="item-info">
              <header>
                <h4>{foodObject.title}</h4>
                <h4 className='price'>{foodObject.price}</h4>
              </header>
              <p className='item-text'>{foodObject.desc}</p>
            </div>
          </article>
        )
      })}
    </div>
  )
};

export default Menu;
