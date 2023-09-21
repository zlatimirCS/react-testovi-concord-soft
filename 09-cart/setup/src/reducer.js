import {
  CLEAR_CART,
  REMOVE_LIST,
  INCREASE_CART,
  DECREASE_CART,
  LOADING,
  DISPLEY_ITEMS,
} from './action';

const reducerFunc = (state, action) => {
  if (action.type === CLEAR_CART) {
    return { ...state, cart: new Map() };
  }
  if (action.type === REMOVE_LIST) {
    // console.log(state.cart);
    const newItems = new Map(state.cart); //always new reference
    newItems.delete(action.id);
    return { ...state, cart: newItems };
  }
  if (action.type === INCREASE_CART) {
    const newItems = new Map(state.cart);
    const itemID = action.id;
    const item = newItems.get(itemID);
    //console.log(item);
    const newOne = { ...item, amount: item.amount + 1 };
    newItems.set(itemID, newOne);
    return { ...state, cart: newItems };
  }
  if (action.type === DECREASE_CART) {
    const newItems = new Map(state.cart);
    const itemID = action.id;
    const item = newItems.get(itemID);
    if (item.amount === 1) {
      newItems.delete(itemID);
    } else {
      const newOne = { ...item, amount: item.amount - 1 };
      newItems.set(itemID, newOne);
    }
    return { ...state, cart: newItems };
  }
  if (action.type === LOADING) {
    return { ...state, loading: true };
  }
  if (action.type === DISPLEY_ITEMS) {
    const newItems = new Map(action.data.map((item) => [item.id, item]));
    return { ...state, loading: false, cart: newItems };
  }
  throw new Error(`no matching type: ${action.type}`);
};

export default reducerFunc;
