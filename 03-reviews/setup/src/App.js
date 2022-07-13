import React, { useState } from "react";
import Review from "./Review";
import reviews from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

function App() {
  const [current, setCurrent] = useState(0);



  const goRight = () => {
    if (current === reviews.length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  };

  const goLeft = () => {
    if (current === 0) {
      setCurrent(reviews.length - 1);
    } else {
      setCurrent(current - 1);
    }
  };

  const randomize = () => {
    const randomNumber = Math.floor(Math.random() * 10000000) % reviews.length;
    if (randomNumber !== current) {
      setCurrent(randomNumber);
    } else {
      randomize();
    }
  };

  return (
    <main>
      <section className="container">
        <div className="title">
          <h2>Our Reviews</h2>
          <div className="underline"></div>
        </div>
        <article className="review">
          <Review data={reviews[current]} />
          <div className="button-container">
            <button onClick={goLeft} className="prev-btn"><FaChevronLeft /></button>
            <button onClick={goRight} className="next-btn"><FaChevronRight /></button>
          </div>
          <button onClick={randomize} className="random-btn">Surprise Me</button>
        </article>
      </section>
    </main>
  );
}

export default App;
