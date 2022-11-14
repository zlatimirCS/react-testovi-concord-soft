import React from "react";
import { Link } from "react-router-dom";

const Cocktail = ({ drink }) => {
  return (
    <div>
      <h2> {drink.strDrink} </h2>
    </div>
  );
};

export default Cocktail;
