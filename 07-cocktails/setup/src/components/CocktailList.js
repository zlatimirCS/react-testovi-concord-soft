import Cocktail from "./Cocktail";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const CocktailList = () => {
  const { drinks, isLoading } = useGlobalContext();
  console.log(drinks);
  if (isLoading) {
    console.log("Loading..");
    return <Loading />;
  } else {
    return (
      <>
        <h2 className="main-title">cocktails</h2>
        <section className="cocktails-container">
          {drinks.map((drink) => {
            return <Cocktail key={drink.idDrink} drink={drink} />;
          })}
        </section>
      </>
    );
  }
};

export default CocktailList;
