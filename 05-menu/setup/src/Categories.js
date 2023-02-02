import React from "react";

const Categories = (props) => {
  const navItems = props.categories || [];

  return (
    <nav className="menu-categories">
      {navItems.map((ni, idx) => (
        <div key={idx} className="menu-item">
          <button className="nav-button" onClick={() => {
            props.onFilter(ni);
          }}>
            {ni.toUpperCase()}
          </button>
        </div>
      ))}
    </nav>
  );
};

export default Categories;
