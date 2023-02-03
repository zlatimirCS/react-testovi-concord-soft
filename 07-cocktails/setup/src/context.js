import React, { useState, useContext, useEffect } from 'react'
// import { useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [coctails, setCoctails] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchCoctails = async () => {
    setLoading(true);
    await fetch(url + keyword)
        .then((response) => response.json())
        .then((data) => setCoctails(data.drinks));
        setLoading(false);
  }

  useEffect(() => {
    fetchCoctails();
  }, [keyword]);

  return <AppContext.Provider value={{coctails, setCoctails, keyword, setKeyword, loading, setLoading}}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
