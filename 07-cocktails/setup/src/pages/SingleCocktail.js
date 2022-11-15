import React from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
import { useGlobalContext } from "../context";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  const { drinks } = useGlobalContext();
  const { id } = useParams();
  const singleCocktail = drinks.find((drink) => drink.idDrink === id);
  console.log(singleCocktail);
  const {
    strDrink,
    strCategory,
    strAlcoholic,
    strGlass,
    strInstructions,
    strDrinkThumb,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strIngredient6,
    strIngredient7,
    strIngredient8,
    strIngredient9,
    strIngredient10,
    strIngredient11,
    strIngredient12,
    strIngredient13,
    strIngredient14,
    strIngredient15,
  } = singleCocktail;
  const ingredients = [
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strIngredient6,
    strIngredient7,
    strIngredient8,
    strIngredient9,
    strIngredient10,
    strIngredient11,
    strIngredient12,
    strIngredient13,
    strIngredient14,
    strIngredient15,
  ];
  return (
    <div>
      <Link to="/">back home</Link>
      <h2>{strDrink}</h2>
      <img src={strDrinkThumb} alt={strDrink} />
      <h2>{strDrink}</h2>
      <h2>{strCategory}</h2>
      <h2>{strGlass}</h2>
      <h2>{strAlcoholic}</h2>
      <h2>{strInstructions}</h2>
      <p>
        {ingredients.map((ingredient) => (
          <span> {ingredient} </span>
        ))}
      </p>
    </div>
  );
};

export default SingleCocktail;
