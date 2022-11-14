import { useContext } from "react";
import Cocktail from "./Cocktail";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const CocktailList = () => {
  const { drinks } = useGlobalContext();
  console.log("Napici: ", drinks);
  return (
    <div>
      <h2>cocktail list component</h2>
      {drinks.map((drink) => {
        <Cocktail key={drink.idDrink} drink={drink} />;
      })}
    </div>
  );
};

export default CocktailList;
