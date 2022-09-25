import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const AppContext = React.createContext({
  coctails: [],
  searchCoctails: (value) => {},
  filterCocktail: (id) => {},
});

const AppProvider = ({ children }) => {
  const [searchCoctails, setSearchCocktails] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  function searchValueHandler(value) {
    setSearchValue(value);
  }

  function singleCocktailHandler(id) {
    searchCoctails.filter((cocktail) => {
      return cocktail.idDrink === id;
    });
  }

  useEffect(() => {
    fetch(url + searchValue)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setSearchCocktails(data.drinks);
      });
  }, [searchValue]);

  const context = {
    coctails: searchCoctails,
    searchCoctails: searchValueHandler,
    filterCocktail: singleCocktailHandler,
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
