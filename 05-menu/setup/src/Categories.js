import React from "react";

const Categories = ({ setCategory }) => {
  return (
    <div className="filter">
      <ul>
        <li>
          <button
            className="all"
            onClick={(e) => setCategory(e.target.className)}
          >
            all
          </button>
        </li>
        <li>
          <button
            className="breakfast"
            onClick={(e) => setCategory(e.target.className)}
          >
            breakfast
          </button>
        </li>
        <li>
          <button
            className="lunch"
            onClick={(e) => setCategory(e.target.className)}
          >
            lunch
          </button>
        </li>
        <li>
          <button
            className="shakes"
            onClick={(e) => setCategory(e.target.className)}
          >
            shakes
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Categories;
