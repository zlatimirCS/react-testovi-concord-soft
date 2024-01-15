import React, { useContext, useEffect, useReducer } from 'react';
import reducer from '../reducers/products_reducer';
import { products_url as url } from '../utils/constants';
import { GET_PRODUCTS_BEGIN, GET_PRODUCTS_SUCCESS } from '../actions';

const initialState = { isSidebarOpen: false, products_loading: true, products_error: false, products: [], featured_products: [], single_product_loading: true, single_product_error: false, single_product: [] };

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		dispatch({ type: GET_PRODUCTS_BEGIN });
		const controller = new AbortController();
		const signal = controller.signal;

		const fetchData = async () => {
			const response = await fetch(`${url}`, { signal });
			const products = await response.json();
			dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products });
		};

		fetchData();

		return () => {
			controller.abort();
		};
	}, []);

	return <ProductsContext.Provider value={{ state, dispatch }}>{children}</ProductsContext.Provider>;
};
// make sure use
export const useProductsContext = () => {
	return useContext(ProductsContext);
};
