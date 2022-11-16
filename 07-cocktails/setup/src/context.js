import {
  createContext,
  useState,
  useContext,
  useEffect,
  useCallback,
} from "react";
import api from "./api/drinks";

const AppContext = createContext({});

const AppProvider = ({ children }) => {
  const [drinks, setDrinks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [notFound, setNotFound] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const fetchDrinks = useCallback(async () => {
    try {
      const response = await api.get(`search.php?s=${searchTerm}`);
      if (response.data.drinks === null || response.data.drinks === undefined) {
        setNotFound(true);
        setIsLoading(false);
      } else {
        setNotFound(false);
        setIsLoading(false);
        setDrinks(response.data.drinks);
      }
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else {
        console.log(`Error: ${error.message}`);
      }
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchDrinks();
  }, [searchTerm, fetchDrinks]);
  return (
    <AppContext.Provider
      value={{ drinks, searchTerm, setSearchTerm, notFound, isLoading }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
