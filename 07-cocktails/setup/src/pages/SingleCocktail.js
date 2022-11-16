import { useCallback, useEffect, useState } from "react";
import api from "../api/drinks";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
import { useGlobalContext } from "../context";
// const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  const { id } = useParams();
  const [singleCocktail, setSingleCocktail] = useState(null);
  const { isLoading } = useGlobalContext();
  const [noCocktail, setNoCocktail] = useState(false);
  console.log(isLoading);

  const fetchSingleCocktail = useCallback(async () => {
    try {
      const response = await api.get(`lookup.php?i=${id}`);
      if (response.data.drinks === null || response.data.drinks === undefined) {
        setNoCocktail(true);
      } else {
        setNoCocktail(false);
        setSingleCocktail(response.data.drinks[0]);
      }
    } catch (error) {
      if (error.response) {
        console.log("ERROR1: ", error.response.data);
        console.log("ERROR2: ", error.response.status);
        console.log("ERROR3: ", error.response.headers);
      } else {
        console.log(`Error: ${error.message}`);
      }
    }
  }, [id]);

  useEffect(() => {
    fetchSingleCocktail();
  }, [fetchSingleCocktail]);

  if (isLoading) {
    return <Loading />;
  }
  if (noCocktail) {
    return <h2>No cocktail to display</h2>;
  }
  if (singleCocktail) {
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

        <>
          <h2>{strDrink}</h2>
          <img src={strDrinkThumb} alt={strDrink} />
          <h2>{strDrink}</h2>
          <h2>{strCategory}</h2>
          <h2>{strGlass}</h2>
          <h2>{strAlcoholic}</h2>
          <h2>{strInstructions}</h2>
          <p>
            {ingredients.map(
              (ingredient) =>
                ingredient !== null && (
                  <span key={ingredient}> {ingredient} </span>
                )
            )}
          </p>
        </>
      </div>
    );
  }
};

export default SingleCocktail;
