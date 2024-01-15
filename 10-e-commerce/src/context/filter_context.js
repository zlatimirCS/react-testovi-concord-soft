import React, { useEffect, useContext, useReducer } from 'react';
import reducer from '../reducers/filter_reducer';
import { LOAD_PRODUCTS, UPDATE_FILTERS } from '../actions';
import { useProductsContext } from './products_context';

const initialState = {
	filtered_products: [],
	all_products: [],
	grid_view: true,
	sort: 'price-lowest',
	filters: {
		text: '',
		category: 'all',
		company: 'all',
		color: 'all',
		min_price: 0,
		max_price: 0,
		price: 0,
		shipping: false
	}
};

const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
	const {
		state: { products }
	} = useProductsContext();
	const [state, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		dispatch({ type: LOAD_PRODUCTS, payload: products });
		if (products.length === 0) return;
		const maxPrice = Math.max(...products.map((product) => product.price));
		dispatch({ type: UPDATE_FILTERS, payload: { name: 'max_price', value: maxPrice } });
		dispatch({ type: 'SORT_PRODUCTS' });
	}, [products]);
	return <FilterContext.Provider value={{ state, dispatch }}>{children}</FilterContext.Provider>;
};
// make sure use
export const useFilterContext = () => {
	return useContext(FilterContext);
};
