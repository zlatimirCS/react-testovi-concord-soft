import React from 'react';

const Menu = ({ itemss }) => {
  console.log(itemss);
  return (
    <div className='menu-container'>
      {itemss.map((item) => {
        const { id, title, price, img, desc } = item;
        return (
          <article key={id}>
            <img src={img} alt='' />
            <div>
              <header>
                <h4>{title}</h4>
                <h4 className='price'>$ {price}</h4>
              </header>
              <p className='info'>{desc}</p>
            </div>
          </article>
        );
      })}

      <article></article>
    </div>
  );
};

export default Menu;
