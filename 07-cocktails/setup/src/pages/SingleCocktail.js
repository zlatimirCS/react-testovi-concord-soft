import React from "react";

import { Link, useLocation } from "react-router-dom";
// const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  const location = useLocation();
  const data = location.state;

  const {
    strDrink: name,
    strCategory: category,
    strAlcoholic: info,
    strGlass: glass,
    strDrinkThumb: pic,
  } = data;

  let instructions = [],
    ingredient = [],
    measure = [];

  function extractionsOfValues(data, valueArray, string, number) {
    let data1 = data;
    for (const key in data1) {
      if (Object.hasOwnProperty.call(data1, key)) {
        if (key.substring(3, number) === string) {
          valueArray.push(data1[key]);
        }
      }
    }
  }

  extractionsOfValues(data, ingredient, "Ingredient", 13);
  extractionsOfValues(data, instructions, "Instructions", 15);
  extractionsOfValues(data, measure, "Measure", 10);
  return (
    <section className="section cocktail-section">
      <Link to="/">
        <span className="btn btn-primary">back home</span>
      </Link>
      <h2 className="section-title">{name}</h2>
      <div className="drink">
        <img src={pic} alt={name} />
        <div className="drink-info">
          <p>
            <span className="drink-data"> name :</span> {name}
          </p>
          <p>
            <span className="drink-data">category :</span> {category}
          </p>
          <p>
            <span className="drink-data">info :</span> {info}
          </p>
          <p>
            <span className="drink-data">glass :</span> {glass}
          </p>
          <p>
            <span className="drink-data">instructons :</span> {instructions[0]}
          </p>
          <p>
            <span className="drink-data">ingredients :</span>
            {ingredient.map((val, index) => {
              return <span key={index}>{val}</span>;
            })}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleCocktail;
