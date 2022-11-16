import React from "react";
import { Link } from "react-router-dom";

const Cocktail = ({ drink }) => {
  return (
    <article>
      <img src={drink.strDrinkThumb} alt={drink.strDrink} />
      <p> {drink.strDrink} </p>
      <p> {drink.strGlass} </p>
      <p> {drink.strAlcoholic} </p>
      <Link to={`/cocktail/${drink.idDrink}`}>details</Link>
    </article>
  );
};

export default Cocktail;
