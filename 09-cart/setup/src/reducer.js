const reducer = (state, action) => {
  if (action.func === "loading") {
    return { ...state, loading: true };
  }

  if (action.func === "done") {
    return { ...state, loading: false };
  }
  if (action.func === "load_cart") {
    return { ...state, cart: action.data };
  }

  if (action.func === "increase") {
    let id = action.payload;
    let cart = state.cart.map((c) => {
      if (c.id === id) {
        c = { ...c, amount: c.amount + 1 };
      }
      return c;
    });

    return { ...state, cart };
  }

  if (action.func === "decrease") {
    let id = action.payload;
    let cart = state.cart.map((c) => {
      if (c.id === id && c.amount > 0) {
        c = { ...c, amount: c.amount - 1 };
      }
        return c;
    });

    cart = cart.filter(c => c.amount > 0);

    return { ...state, cart };
  }

  if(action.func === "remove") {
    let id = action.payload;
    let cart = state.cart.filter(c => c.id !== id);

    return { ...state, cart }
  }

  if(action.func === "totals") {
    let amount = 0
    let total = 0;
    state.cart.forEach(c => {
      amount += c.amount;
      total += c.amount * c.price;
    });
    total = parseFloat(total).toFixed(2);
    return { ...state, amount, total };

  };

  if(action.func === "clear") {

    return { ...state, cart: [], total: 0, amount: 0}
  }

};

export default reducer;