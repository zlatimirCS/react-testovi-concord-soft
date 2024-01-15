import { ADD_TO_CART, CLEAR_CART, COUNT_CART_TOTALS, GET_CART, REMOVE_CART_ITEM, TOGGLE_CART_ITEM_AMOUNT } from '../actions';

const cart_reducer = (state, action) => {
	switch (action.type) {
		case GET_CART:
			return { ...state, cart: action.payload };
		case ADD_TO_CART:
			const { id, color } = action.payload;
			const existingItemIndex = state.cart.findIndex((item) => item.id === id && item.color === color);

			let newCart;
			if (existingItemIndex >= 0) {
				newCart = [...state.cart];
				newCart[existingItemIndex] = action.payload;
			} else {
				newCart = [...state.cart, action.payload];
			}

			localStorage.setItem('cart', JSON.stringify(newCart));
			return { ...state, cart: newCart, default_item_quantity: 1 };

		case REMOVE_CART_ITEM:
			return { ...state, cart: state.cart.filter((item) => item.id !== action.payload) };
		case CLEAR_CART:
			return { ...state, cart: [], total_amount: 0, total_items: 0 };
		case TOGGLE_CART_ITEM_AMOUNT:
			return {
				...state,
				cart: state.cart
					.map((item) => {
						if (item.id === action.payload.id) {
							if (action.payload.value === 'inc' && item.amount < item.stock) {
								return { ...item, amount: item.amount + 1 };
							}
							if (action.payload.value === 'dec') {
								return item.amount > 1 ? { ...item, amount: item.amount - 1 } : item;
							}
						}
						return item;
					})
					.filter((item) => item.amount !== 0)
			};
		case 'DEFAULT_ITEM_QUANTITY':
			console.log(action.payload);
			if (action.payload.value === 'inc' && state.default_item_quantity < action.payload.stock) {
				return { ...state, default_item_quantity: state.default_item_quantity + 1 };
			}

			if (action.payload.value === 'dec' && state.default_item_quantity > 1) {
				return { ...state, default_item_quantity: state.default_item_quantity - 1 };
			}
			return state;
		case COUNT_CART_TOTALS:
			return { ...state, total_items: state.cart.reduce((total, item) => total + item.amount, 0) };
		default:
			throw new Error(`No Matching "${action.type}" - action type`);
	}
};

export default cart_reducer;
