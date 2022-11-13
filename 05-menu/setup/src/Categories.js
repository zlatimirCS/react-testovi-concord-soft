import React from "react";

const Categories = ({ setCategory }) => {
  return (
    <div className="filter">
      <button className="all" onClick={(e) => setCategory(e.target.className)}>
        all
      </button>

      <button
        className="breakfast"
        onClick={(e) => setCategory(e.target.className)}
      >
        breakfast
      </button>

      <button
        className="lunch"
        onClick={(e) => setCategory(e.target.className)}
      >
        lunch
      </button>

      <button
        className="shakes"
        onClick={(e) => setCategory(e.target.className)}
      >
        shakes
      </button>
    </div>
  );
};

export default Categories;
