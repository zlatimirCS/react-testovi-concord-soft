import React from "react";
import Cocktail from "./Cocktail";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const CocktailList = () => {
  const global = useGlobalContext();

  return (
    <section className="section">
      <h2 className="section-title">cocktails</h2>
      <div className="cocktails-center">
        {global.coctails.map((coctail) => {
          return <Cocktail key={coctail.idDrink} value={coctail} />;
        })}
      </div>
    </section>
  );
};

export default CocktailList;
