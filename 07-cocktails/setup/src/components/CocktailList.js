import React from "react";
import Cocktail from "./Cocktail";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const CocktailList = () => {
  const { cocktails, loading } = useGlobalContext();
  console.log('cocktails', cocktails);

  if (loading) {
    return <Loading />;
  }

  if (cocktails?.length < 1) {
    return (
      <h2 className="section-title">
        No cockctails that match your search criteria.
      </h2>
    );
  }

  return (
    <section className="section">
      <h2 className="section-title">cocktails </h2>
      <div className="cocktails-center">
        {cocktails && cocktails.map((item, index) => {
          return <Cocktail key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default CocktailList;
