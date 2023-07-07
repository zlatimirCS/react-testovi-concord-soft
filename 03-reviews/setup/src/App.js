import React, { useState } from 'react';
import Review from './Review';
import reviews from './data';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import "./App.css";

function App() {
  const [index, setIndex] = useState(0);

  const { id, name, job, image, text } = reviews[index];

  const nextReview = () => {
    setIndex((index + 1) % reviews.length);
  };

  const prevReview = () => {
    setIndex((index + reviews.length - 1) % reviews.length);
  };

  const randomReview = () => {
    const randomIndex = Math.floor(Math.random() * reviews.length);
    setIndex(randomIndex);
  };

  return (
    <div>
      <div className='title'>
        <h1>Our Reviews</h1>
        <div className='line'></div>
      </div>
      <div className='content'>
      <Review key={id} review={{ name, job, image, text }} />

      <div className="button-container">
        <button className="prev-btn" onClick={prevReview}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextReview}>
          <FaChevronRight />
        </button>
      </div>

      <button className="surprise" onClick={randomReview}>
        Surprise Me
      </button>
      </div>
    </div>
  );
}

export default App;
