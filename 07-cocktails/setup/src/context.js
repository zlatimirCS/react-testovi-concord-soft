import React, { useState, useContext, useEffect } from 'react';
import { useCallback } from 'react';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [loading, setLoading] = useState(true);
	const [cocktails, setCocktails] = useState([]);
	const [search, setSearch] = useState('');

	const fetchDrinks = useCallback(
		async (signal) => {
			setLoading(true);
			try {
				const response = await fetch(`${url}${search}`, { signal });
				const data = await response.json();
				const { drinks } = data;

				if (drinks) {
					const newDrinks = drinks.map((item) => {
						const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = item;
						return {
							id: idDrink,
							name: strDrink,
							image: strDrinkThumb,
							info: strAlcoholic,
							glass: strGlass
						};
					});

					setCocktails(newDrinks);
					setLoading(false);
				} else {
					setCocktails([]);
					setLoading(false);
				}
			} catch (error) {
				console.log(error);
				setLoading(false);
			}
		},
		[search]
	);

	useEffect(() => {
		const controller = new AbortController();
		const signal = controller.signal;
		fetchDrinks(signal);

		return () => {
			controller.abort();
		};
	}, [fetchDrinks]);

	return <AppContext.Provider value={{ loading, setLoading, cocktails, search, setSearch }}>{children}</AppContext.Provider>;
};
// make sure use
export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider };
