import React from "react";

const Categories = () => {
  return (
    <div className="filter">
      <ul>
        <button>
          <li>all</li>
        </button>
        <button>
          <li>breakfast</li>
        </button>
        <button>
          <li>lunch</li>
        </button>
        <button>
          <li>shakes</li>
        </button>
      </ul>
    </div>
  );
};

export default Categories;
