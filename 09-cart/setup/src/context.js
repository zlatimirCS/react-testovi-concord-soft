import React, { useState, useContext, useReducer, useEffect } from 'react'
//import cartItems from './data'
import reducer from './reducer'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-useReducer-cart-project'
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {loading: false, cart: [], total: 0, amount: 0})

  const inc = (id) => {
    dispatch({func: "increase", payload: id});
  }

  const dec = (id) => {
    dispatch({func: "decrease", payload: id});
  }

  const remove = (id) => {
    dispatch({func: "remove", payload: id});
  }

  const clear = () => {
    dispatch({func: "clear"});
  }

  const fetchItems = async () => {
    dispatch({func: "loading"});
    await fetch(url)
        .then((response) => response.json())
        .then((data) => dispatch({func: "load_cart", data}));
        dispatch({func: "done"});
  }

  useEffect(() => {
    fetchItems();
  }, []);

  useEffect(() => {
    dispatch({ func: "totals" })
  }, [state.cart])

  return (
    <AppContext.Provider
      value={{
        state,
        inc,
        dec,
        remove,
        clear
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
