import React from "react";

const Menu = (props) => {
  return (
    <div className="menu-offer">
      {props.items.map((i, idx) => {
        return (
          <div className="menu-card" key={idx}>
            <img className="article-image" src={i.img} alt={i.title} />
            <div className="article-details">
              <header>
                <h4>{i.title}</h4>
                <h4 className="price">${i.price}</h4>
              </header>
              <p>{i.desc}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
};

export default Menu;
