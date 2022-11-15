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

  useEffect(() => {
    const fetchDrinks = async () => {
      try {
        const response = await api.get();
        if (response && response.data) {
          setDrinks(() => {
            const filteredDrinks = response.data.drinks.filter((drink) =>
              drink.strDrink.toLowerCase().includes(searchTerm.toLowerCase())
            );
            filteredDrinks.length === 0
              ? setNotFound(true)
              : setNotFound(false);
            return filteredDrinks;
          });
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
    };
    fetchDrinks();
  }, [searchTerm]);
  return (
    <AppContext.Provider
      value={{ drinks, searchTerm, setSearchTerm, notFound }}
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
