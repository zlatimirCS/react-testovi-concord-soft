export const cartReducer = (state, action) => {
	switch (action.type) {
		case 'SET_CART':
			return action.cart;
		case 'CLEAR_CART':
			return [];
		case 'REMOVE_ITEM':
			return state.filter((item) => item.id !== action.id);
		case 'INCREASE_QUANTITY':
			return state.map((item) => (item.id === action.id ? { ...item, amount: item.amount + 1 } : item));
		case 'DECREASE_QUANTITY':
			if (state.find((item) => item.id === action.id).amount <= 1) {
				return state.filter((item) => item.id !== action.id);
			}
			return state.map((item) => (item.id === action.id ? { ...item, amount: item.amount - 1 } : item));
		default:
			return state;
	}
};
