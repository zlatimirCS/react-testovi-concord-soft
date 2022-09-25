import React from "react";
import { Link } from "react-router-dom";

const Cocktail = (props) => {
  let prop = props.value;
  return (
    <article className="cocktail">
      <div className="img-container">
        <img src={prop.strDrinkThumb} alt={prop.strDrink} />
      </div>
      <div className="cocktail-footer">
        <h3>{prop.strDrink}</h3>
        <h4>{prop.strGlass}</h4>
        <p>{prop.strAlcoholic}</p>
        <Link
          className="btn btn-primary btn-detailes"
          to={{
            pathname: `/singlecocktail/${prop.idDrink}`,
            state: { prop },
          }}
          state={prop}
        >
          details
        </Link>
      </div>
    </article>
  );
};

export default Cocktail;
