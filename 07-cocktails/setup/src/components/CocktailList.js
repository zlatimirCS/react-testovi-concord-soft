import { useContext } from "react";
import Cocktail from "./Cocktail";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const CocktailList = () => {
  const { drinks } = useGlobalContext();

  console.log("Render");
  return (
    <div>
      <h2>cocktails</h2>
      {drinks.map((drink) => {
        return (
          <article key={drink.idDrink}>
            <img src={drink.strDrinkThumb} alt={drink.strDrink} />
            <p> {drink.strDrink} </p>
            <p> {drink.strGlass} </p>
            <p> {drink.strAlcoholic} </p>
            <button>details</button>
          </article>
        );
      })}
    </div>
  );
};

export default CocktailList;
