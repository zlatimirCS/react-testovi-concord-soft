import Cocktail from "./Cocktail";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const CocktailList = () => {
  const { drinks } = useGlobalContext();
  console.log(drinks);
  return (
    <div>
      <h2>cocktails</h2>
      {drinks.map((drink) => {
        return <Cocktail key={drink.idDrink} drink={drink} />;
      })}
    </div>
  );
};

export default CocktailList;
