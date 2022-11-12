import { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [id, setId] = useState(0);
  const numOfPersons = people.length - 1;
  const previousHandler = () => {
    setId((prev) => {
      if (id === 0) return numOfPersons;
      return prev - 1;
    });
  };
  const nextHandler = () => {
    setId((prev) => {
      if (id === numOfPersons) return 0;
      return prev + 1;
    });
  };
  const surpriseHandler = () => {
    const randomId = Math.floor(Math.random() * 4);
    setId(randomId);
  };
  return (
    <article className="card">
      <div className="person">
        <div className="img-container">
          <span className="quotes">
            <FaQuoteRight />
          </span>
          <img src={people[id].image} alt={people[id].name} />
        </div>
        <h4 className="name"> {people[id].name}</h4>
        <p className="job"> {people[id].job}</p>
        <p className="text"> {people[id].text}</p>
      </div>
      <div className="controls">
        <div>
          <button onClick={previousHandler} className="prev-btn">
            <FaChevronLeft />
          </button>
          <button onClick={nextHandler} className="next-btn">
            <FaChevronRight />
          </button>
        </div>
        <button onClick={surpriseHandler} className="surprise-btn">
          Surprise me
        </button>
      </div>
    </article>
  );
};

export default Review;
