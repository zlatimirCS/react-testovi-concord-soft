import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [value, setValue] = useState(0);
  const { image, job, name, text } = people[value];
  const switchPeopleLeft = () => {
    if (value === 0) {
      setValue(people.length - 1);
    } else {
      setValue(value - 1);
    }
  };
  const switchPeopleRight = () => {
    if (value === people.length - 1) {
      setValue(0);
    } else {
      setValue(value + 1);
    }
  };
  const getRandomPerson = () => {
    let random = Math.floor(Math.random() * people.length);
    if (value === random) {
      random = Math.floor(Math.random() * people.length);
    }
    setValue(random);
  };
  return (
    <section className='container'>
      <div className='title'>
        <h2>our reviews</h2>
        <div className='underline'></div>
      </div>
      <article className='review'>
        <div className='review__img-container'>
          <img src={image} alt={name} className='person-img' />
          <span className='quote-icon'>
            <FaQuoteRight />
          </span>
        </div>
        <h4 className='review__author'>{name}</h4>
        <p className='review__job'>{job}</p>
        <p className='review__info'>{text}</p>
        <div>
          <button
            className='review__prev-btn'
            onClick={() => switchPeopleLeft()}
          >
            <FaChevronLeft />
          </button>
          <button
            className='review__next-btn'
            onClick={() => switchPeopleRight()}
          >
            <FaChevronRight />
          </button>
        </div>
        <button
          className='review__random-btn'
          onClick={() => getRandomPerson()}
        >
          Surprise me
        </button>
      </article>
    </section>
  );
};

export default Review;
