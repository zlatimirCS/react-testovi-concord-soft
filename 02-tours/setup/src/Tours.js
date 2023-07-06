import React from 'react';
import Tour from './Tour';
import './Tours.css';

const Tours = ({ tours, deleteTour }) => {
  return (
    <div className='tours'>
      {tours.map((tour) => (
        <Tour key={tour.id} tour={tour} deleteTour={deleteTour} />
      ))}
    </div>
  );
};

export default Tours;
