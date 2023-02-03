import React from "react";
// import Cocktail from "./Cocktail";
import Loading from "./Loading";
import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";

const CocktailList = () => {
  const { loading, coctails } = useGlobalContext();

  if (loading) {
    return <Loading />;
  } else {
    if (coctails && coctails.length > 0) {
      return (
        <section className="section">
          <h2 className="section-title">cocktails</h2>
          <div className="cocktails-center">
            {coctails &&
              coctails.map((c, i) => {
                return (
                  <article key={c.idDrink} className="cocktail">
                    <div className="img-container">
                      <img src={c.strDrinkThumb} alt={c.strDrink} />
                    </div>
                    <div className="cocktail-footer">
                      <h3>{c.strDrink}</h3>
                      <h4>{c.strGlass}</h4>
                      <p>{c.strAlcoholic}</p>
                      <Link
                        className="btn btn-primary btn-details"
                        to={`/cocktail/${c.idDrink}`}
                      >
                        details
                      </Link>
                    </div>
                  </article>
                );
              })}
          </div>
        </section>
      );
    } else {
      return (
        <h2 className="section-title">no cocktails matched your search criteria</h2>
      )
    }
  }
};

export default CocktailList;
