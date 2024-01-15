import React, { useEffect, useContext, useReducer } from 'react';
import reducer from '../reducers/cart_reducer';
import { COUNT_CART_TOTALS, GET_CART } from '../actions';

const initialState = {
	cart: [],
	total_items: 0,
	total_amount: 0,
	shipping_fee: 5.34,
	default_item_quantity: 1
};

const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		let cartData = localStorage.getItem('cart');

		if (cartData === null) {
			localStorage.setItem('cart', JSON.stringify([]));
			cartData = localStorage.getItem('cart');
		}
		dispatch({ type: GET_CART, payload: JSON.parse(cartData) });
	}, []);

	useEffect(() => {
		dispatch({ type: COUNT_CART_TOTALS });
		localStorage.setItem('cart', JSON.stringify([...state.cart]));
	}, [state.cart]);

	return <CartContext.Provider value={{ state, dispatch }}>{children}</CartContext.Provider>;
};
// make sure use
export const useCartContext = () => {
	return useContext(CartContext);
};
