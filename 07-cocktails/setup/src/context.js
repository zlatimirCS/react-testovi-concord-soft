import {
  createContext,
  useState,
  useContext,
  useEffect,
  useCallback,
} from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [drinks, setDrinks] = useState();

  const fetchDrinks = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setDrinks(data);
  };

  useEffect(() => {
    fetchDrinks();
  }, []);

  return <AppContext.Provider value={drinks}>{children}</AppContext.Provider>;
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
