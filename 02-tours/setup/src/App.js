import React, { useState, useEffect } from 'react';
import Tours from './Tours';
import Tour from './Tour';
import data from './data';
import './App.css';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTours(data);
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const deleteTour = (id) => {
    const updatedTours = tours.filter((tour) => tour.id !== id);
    setTours(updatedTours);
  };

  return (
    <div>
      {isLoading ? (
        <div className='loading'>
          <p>Loading...</p>
        </div>
      ) : (
        <div>
          <h1>Our Tours</h1>
          <div className='line'></div>
          <Tours tours={tours} deleteTour={deleteTour} />
        </div>
      )}
    </div>
  );
};

export default App;
