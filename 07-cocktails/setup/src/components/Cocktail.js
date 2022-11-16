import React from "react";
import { Link } from "react-router-dom";

const Cocktail = ({ drink }) => {
  return (
    <article className="cocktail-card">
      <img src={drink.strDrinkThumb} alt={drink.strDrink} />
      <div className="cocktail-info">
        <h3> {drink.strDrink} </h3>
        <h4> {drink.strGlass} </h4>
        <p> {drink.strAlcoholic} </p>
        <Link
          to={`/cocktail/${drink.idDrink}`}
          className="btn btn-primary btn-details"
        >
          details
        </Link>
      </div>
    </article>
  );
};

export default Cocktail;
