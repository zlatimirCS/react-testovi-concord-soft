import React, { useState, useEffect } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [selector, setSelector] = useState(0);
  const [persons, setPersons] = useState(people);

  // Fetch data
  useEffect(() => {
    setPersons(people)
  }, []);

  // Shit selector right
  const shiftRifht = () => {
    const peopleLen = persons.length;
    if((selector + 1) >= peopleLen ) {
      setSelector(0)
    } else {
      setSelector(selector + 1)
    }
  }

  // Shift selector left
  const shiftLeft = () => {
    const peopleLen = persons.length;
    if((selector - 1) <= 0 ) {
      setSelector(peopleLen - 1)
    } else {
      setSelector(selector - 1)
    }
  }

  // Generate random number different from the current
  const setRandom = () => {
    const peopleLen = persons.length;    
    let getRandom = () => {
      let random = Math.floor(Math.random() * peopleLen)
      return random === selector ? getRandom() : random
    }
    setSelector(getRandom());
  }

  return (
    <section className="container">
      <div className="title">
        <h2>our reviews</h2>
        <div className="underline"></div>
      </div>
      <article key={persons[selector].id} className="review">
        <div className="img-container">
          <img src={persons[selector].image} alt={persons[selector].name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{persons[selector].name}</h4>
        <p className="job">{persons[selector].job}</p>
        <p className="info">{persons[selector].text}</p>
        <div className="button-container">
          <button className="prev-btn" onClick={shiftLeft}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={shiftRifht}>
            <FaChevronRight />
          </button>
        </div>
        <button className="random-btn" onClick={setRandom}>surprise me</button>
      </article>
    </section>
  )
};

export default Review;
