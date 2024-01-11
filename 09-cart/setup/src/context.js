import React, { useContext, useReducer, useEffect } from 'react';
import { cartReducer } from './reducer';
import { useState } from 'react';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-useReducer-cart-project';
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [loading, setLoading] = useState(true);
	const [state, dispatch] = useReducer(cartReducer, []);
	const reducer = { state, dispatch };

	useEffect(() => {
		const controller = new AbortController();
		const signal = controller.signal;

		const fetchData = async () => {
			const response = await fetch(`${url}`, { signal });
			const cart = await response.json();
			dispatch({ type: 'SET_CART', cart });
			setLoading(false);
			console.log('fetchin data...');
		};

		fetchData();

		return () => {
			controller.abort();
		};
	}, []);

	return (
		<AppContext.Provider
			value={{
				reducer,
				loading
			}}>
			{children}
		</AppContext.Provider>
	);
};
// make sure use
export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider };
