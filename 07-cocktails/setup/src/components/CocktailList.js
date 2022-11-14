import { useContext } from "react";
import Cocktail from "./Cocktail";
import Loading from "./Loading";
import { AppContext, useGlobalContext } from "../context";

const CocktailList = () => {
  // const { drinks } = useContext(AppContext);
  const { drinks } = useGlobalContext();
  console.log("drinks: ", drinks);

  return (
    <div>
      <h2>cocktail list component</h2>
      {drinks.map((drink) => {
        return (
          <article key={drink.idDrink}>
            <p> {drink.strDrink} </p>
          </article>
        );
      })}
    </div>
  );
};

export default CocktailList;
