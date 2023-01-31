import React, { useState } from 'react';

const Tour = (props) => {

  const [showMore, setShowMore] = useState(false)
  const tour = props.tour;

  const toggleShow = () => {
    setShowMore(prevShow => !prevShow)
  }

  return (
    <article className="single-tour">
      <img src={tour.image} alt={tour.name} />
      <div className="tour-info">
        <span className="tour-price">{tour.price}</span>
        <h4>{tour.name}</h4>
        {
        showMore ?
        <p>
          {tour.info} <button onClick={toggleShow}> Show less</button>
        </p> :
        <p>
          {tour.info.slice(200)}... <button onClick={toggleShow}> Read more</button>
        </p>
        }
        <button className="delete-btn" onClick={() => props.onNotInterested(tour.id)}>not interested</button>
      </div>
    </article>
  )
};

export default Tour;
