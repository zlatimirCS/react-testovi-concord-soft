import React, { useState, useContext, useEffect } from "react";
// import { useCallback } from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const AppContext = React.createContext({
  coctails: [],
  searchCoctails: (value) => {},
  filterCocktail: (id) => {},
  loading: Boolean,
});

const AppProvider = ({ children }) => {
  const [searchCoctails, setSearchCocktails] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(true);

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
        setLoading(true);
        return response.json();
      })
      .then((data) => {
        setSearchCocktails(data.drinks);
        setLoading(false);
      });
  }, [searchValue]);

  const context = {
    coctails: searchCoctails,
    searchCoctails: searchValueHandler,
    filterCocktail: singleCocktailHandler,
    loading: loading,
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
