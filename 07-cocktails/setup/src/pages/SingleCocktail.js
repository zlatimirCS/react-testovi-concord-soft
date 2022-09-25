import React, { useState } from "react";
import Loading from "../components/Loading";
import { useParams, Link, useLocation } from "react-router-dom";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = (props) => {
  const { type } = useParams();
  const location = useLocation();
  const data = location.state;
  const [cocktail, setcocktail] = useState([]);
  console.log(data);

  React.useEffect(() => {
    fetch(url + type)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return data;
      })
      .then((data) => {
        const { drinks } = data;
        setcocktail(drinks[0]);
      });
  }, []);

  // console.log(cocktail);

  const {
    idDrink: name,
    strCategory: category,
    strAlcoholic: alcohol,
    strGlass: glass,
  } = cocktail;

  const instructions = [],
    ingredient = [],
    measure = [];

  for (const key in cocktail) {
    // console.log(key);
    if (Object.hasOwnProperty.call(cocktail, key)) {
      const element = cocktail[key];
      // console.log(element);
    }
  }
  return (
    <section>
      <h2>sadfad</h2>
    </section>
  );
};

export default SingleCocktail;
