import React from "react";
import Cocktail from "./Cocktail";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const CocktailList = () => {
  const global = useGlobalContext();

  let values;

  if (global.loading) {
    values = <Loading />;
  } else {
    values = (
      <div className="cocktails-center">
        {global.coctails.map((coctail) => {
          return <Cocktail key={coctail.idDrink} value={coctail} />;
        })}
      </div>
    );
  }
  return (
    <section className="section">
      <h2 className="section-title">cocktails</h2>
      {/* <div className="cocktails-center">
        {global.coctails.map((coctail) => {
          return <Cocktail key={coctail.idDrink} value={coctail} />;
        })}
      </div> */}
      {values}
    </section>
  );
};

export default CocktailList;
