import React, { useState } from 'react';
import Review from './Review';
import people from './data.js';
import './styles.css';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

function App() {
  const [index, setIndex] = useState(0);
  const person = people[index];

  const hendleNext = () => {
    console.log('u NEXT');
    if (index === people.length - 1) {
      return setIndex(0);
    }
    return setIndex(index + 1);
  };

  const hendlePrev = () => {
    console.log('u prev');
    if (index === 0) {
      return setIndex(people.length - 1);
    }
    return setIndex(index - 1);
  };

  const handleRandom = () => {
    let random = Math.floor(Math.random() * people.length);

    if (random === index) {
      random = index + 1;
    }
    if (random > people.length - 1) {
      return setIndex(0);
    }
    return setIndex(random);
  };
  return (
    <main>
      <section>
        <div className='title margin-buttom'>
          <h1>Our Reviews</h1>
          <span className='decorative'></span>
        </div>
        <Review
          person={person}
          hendleNext={hendleNext}
          hendlePrev={hendlePrev}
          handleRandom={handleRandom}
        ></Review>
      </section>
    </main>
  );
}

export default App;
