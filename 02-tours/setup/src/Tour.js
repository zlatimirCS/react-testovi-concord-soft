import React, { useState } from 'react';

const Tour = ({ id, image, info, price, name, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  let [textButton, setTextButton] = useState('Read more');

  const toggleReadMore = () => {
    if (readMore) {
      setReadMore(!readMore);
      textButton = 'Read more';
      setTextButton(textButton);
    } else {
      setReadMore(!readMore);
      textButton = 'Read less';
      setTextButton(textButton);
    }
  };

  return (
    <article className='tour'>
      <section>
        <img src={image} alt={name} className='tour__image' />
        <span className='tour__price'>${price}</span>
      </section>
      <section className='tour__info'>
        <h5>{name}</h5>
        <p>
          {readMore ? info : `${info.substring(0, 200)}... `}
          <button
            type='button'
            className='tour__info-btn'
            onClick={() => toggleReadMore()}
          >
            {textButton}
          </button>
        </p>
        <section className='center'>
          <button
            type='button'
            className='btn btn-block delete-btn'
            onClick={() => removeTour(id)}
          >
            Not Interested
          </button>
        </section>
      </section>
    </article>
  );
};

export default Tour;
