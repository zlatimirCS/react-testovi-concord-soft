import React, { useState, useContext, useReducer, useEffect } from 'react';
import cartItems from './data';
import reducerFunc from './reducer';
import getTotals from './total';
import {
  CLEAR_CART,
  REMOVE_LIST,
  INCREASE_CART,
  DECREASE_CART,
  LOADING,
  DISPLEY_ITEMS,
} from './action';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-useReducer-cart-project';
const AppContext = React.createContext();

// let newCart = cartItems.map((item) => [item.id, item]);
// newCart = new Map(newCart);
// console.log(newCart);

// default data in reduce
const defaultState = {
  loading: false,
  cart: new Map(),
};

//AppProvider function::
const AppProvider = ({ children }) => {
  //useReduce::
  const [state, dispatch] = useReducer(reducerFunc, defaultState);
  //console.log({ ...state });

  //retrun of the function getTotal() whit arguments from reduce state::
  const { totalAmount, totalCost } = getTotals(state.cart);

  //function in container and cartItem on click::
  const clearItems = () => {
    dispatch({ type: CLEAR_CART });
  };
  const removeItems = (id) => {
    dispatch({ type: REMOVE_LIST, id: id });
  };
  const increase = (id, amount) => {
    dispatch({ type: INCREASE_CART, id: id });
  };
  const decrease = (id) => {
    dispatch({ type: DECREASE_CART, id: id });
  };

  //fetch data from api::
  const fetchData = async () => {
    dispatch({ type: LOADING });
    try {
      const respons = await fetch(url);
      const data = await respons.json();
      console.log(data);
      dispatch({ type: DISPLEY_ITEMS, data: data });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearItems,
        removeItems,
        increase,
        decrease,
        totalAmount,
        totalCost,
      }}
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
