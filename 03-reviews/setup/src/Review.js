import React from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = ({ person, hendleNext, hendlePrev, handleRandom }) => {
  console.log(person);
  const { image, name, job, text } = person;
  return (
    <article>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4>{name}</h4>
      <p className='job-paraf margin-buttom'>{job}</p>
      <p className='margin-buttom info'>{text}</p>
      <div className='margin-buttom'>
        <button className='chevron-icon prev-btn' onClick={hendlePrev}>
          <FaChevronLeft />
        </button>
        <button className='chevron-icon next-btn' onClick={hendleNext}>
          <FaChevronRight />
        </button>
      </div>
      <button className='surprise-btn margin-buttom' onClick={handleRandom}>
        Surprise me
      </button>
    </article>
  );
};

export default Review;
