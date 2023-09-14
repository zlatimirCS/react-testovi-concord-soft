import React from 'react';
import Tour from './Tour';

const Tours = ({ toursData, removeArticle }) => {
  console.log(toursData);
  console.log(removeArticle);
  return (
    <div className='tours-container'>
      {toursData.map((tour) => {
        return <Tour key={tour.id} {...tour} removeArticle={removeArticle} />;
      })}
    </div>
  );
};

export default Tours;
