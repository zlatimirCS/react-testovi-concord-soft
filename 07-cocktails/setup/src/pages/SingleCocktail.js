import React, { useState, useEffect } from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  const [loading, setLoading] = useState(true);
  const [cocktail, setCocktail] = useState(true);
  const params = useParams();

  const fetchSingleCocktail = async () => {
    setLoading(true);
    try {
      await fetch(url + params.id.toString())
        .then((response) => response.json())
        .then((data) => setCocktail(data.drinks));
    } catch (error) {
      console.log(error.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchSingleCocktail();
  }, []);

  const exportIngrediends = (object) => {
    let output = [];
    Object.keys(object).forEach(function (key) {
      if(key.includes('strIngredient')) {
        if(object[key]) {
          output.push(<span key={key}>{object[key]}</span>);
        }
      }
    });

    return output;
  }

  if (loading) {
    return <Loading />;
  } else {
    if (cocktail && cocktail.length > 0) {
      return (
        <section className="section cocktail-section">
          <Link className="btn btn-primary" to="/">
            back home
          </Link>
          <h2 className="section-title">{cocktail[0].strDrink}</h2>
          <div className="drink">
            <img src={cocktail[0].strDrinkThumb} alt="Absolutely Fabulous" />
            <div className="drink-info">
              <p>
                <span className="drink-data">name :</span>{" "}
                {cocktail[0].strDrink}
              </p>
              <p>
                <span className="drink-data">category :</span>{" "}
                {cocktail[0].strCategory}
              </p>
              <p>
                <span className="drink-data">info :</span>{" "}
                {cocktail[0].strAlcoholic}
              </p>
              <p>
                <span className="drink-data">glass :</span>{" "}
                {cocktail[0].strGlass}
              </p>
              <p>
                <span className="drink-data">instructons :</span>{" "}
                {cocktail[0].strInstructions}
              </p>
              <p>
                <span className="drink-data">ingredients :</span>
                {exportIngrediends(cocktail[0])}
              </p>
            </div>
          </div>
        </section>
      );
    } else {
      return <h2 className="section-title">no cocktail to display</h2>;
    }
  }
};

export default SingleCocktail;
