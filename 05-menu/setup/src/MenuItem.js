import React from 'react';

const MenuItem = ({ img, title, price, desc }) => {
  return (
    <article className='menu-item'>
      <img src={img} alt={title} className='photo' />
      <div className='item-info'>
        <header>
          <h4>{title}</h4>
          <h4 className='price'>$ {price}</h4>
        </header>
        <p className='item-text'>{desc}</p>
      </div>
    </article>
  );
};

export default MenuItem;
