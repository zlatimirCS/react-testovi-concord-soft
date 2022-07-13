import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = (props) => {
  console.log(props);
  const person = props.data;
  return (
    <div>
      <div className="img-container">
        <img src={person.image} alt={person.name} className="person-img" />
        <span class="quote-icon"><FaQuoteRight /></span>
      </div>
      <h2 className="author">{person.name}</h2>
      <h3 className="job">{person.job}</h3>
      <p className="info">{person.text}</p>
    </div>
  );
};

export default Review;
