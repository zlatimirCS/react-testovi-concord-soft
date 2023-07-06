import React, { useState } from 'react';
import './Tour.css';

const Tour = ({ tour, deleteTour }) => {
  const { id, name, description, price, image } = tour;
  const [showMore, setShowMore] = useState(false);

  const toggleDescription = () => {
    setShowMore(!showMore);
  };

  const handleDelete = () => {
    deleteTour(id);
  };

  return (
    <div className='tour'>
      <div className='price'><p>{price}</p></div>
      <img src={image} alt={name} />
      <div className='content'>
      <h2>{name}</h2>
      <p>{showMore ? description : `${description.substring(0, 200)}...`}</p>
      {description.length > 200 && (
        <a onClick={toggleDescription}>
          {showMore ? 'Read less' : 'Read more'}
        </a>
      )}
      <br></br><button onClick={handleDelete}>Not Interested</button>
      </div>
      </div>
    
  );
};

export default Tour;
