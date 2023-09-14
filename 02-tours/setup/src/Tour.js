import React, { useState } from 'react';

const Tour = ({ id, image, info, name, price, removeArticle }) => {
  const [isReadMore, setReadMore] = useState(false);
  return (
    <article key={id}>
      <img src={image} />
      <span className='price'>${price}</span>
      <div className='info-tour'>
        <h4>{name}</h4>
        <p>
          {isReadMore ? info : `${info.substr(0, 180)}...`}
          <button className='more-btn' onClick={() => setReadMore(!isReadMore)}>
            {isReadMore ? 'Show less' : 'Read more'}
          </button>
        </p>
        <button
          className='not-interuested-btn'
          onClick={() => removeArticle(id)}
        >
          Not interested
        </button>
      </div>
    </article>
  );
};

export default Tour;
