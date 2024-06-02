import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREMENT_CART,
  DECREMENT_CART,
  DELETE_ALL_CART,
} from "../action/action";

const initialState = {
  value: JSON.parse(localStorage.getItem("cart")) || [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        value: addToCartReducer(state.value, action.payload),
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        value: removeFromCartReducer(state.value, action.payload),
      };
    case INCREMENT_CART:
      return {
        ...state,
        value: incrementCartReducer(state.value, action.payload),
      };
    case DECREMENT_CART:
      return {
        ...state,
        value: decrementCartReducer(state.value, action.payload),
      };
    case DELETE_ALL_CART:
      return {
        ...state,
        value: [],
      };
    default:
      return state;
  }
};

const addToCartReducer = (cart, payload) => {
  let index = cart.findIndex((item) => item.id === payload.id);
  if (index < 0) {
    return [...cart, { ...payload, quantity: 1 }];
  } else {
    return cart.map((item, idx) =>
      idx === index ? { ...item, quantity: item.quantity + 1 } : item
    );
  }
};

const removeFromCartReducer = (cart, payload) => {
  if (payload && payload.id) {
    return cart.filter((item) => item.id !== payload.id);
  }
  return cart;
};

const incrementCartReducer = (cart, payload) => {
  let index = cart.findIndex((item) => item.id === payload.id);
  return cart.map((item, idx) =>
    idx === index ? { ...item, quantity: item.quantity + 1 } : item
  );
};

const decrementCartReducer = (cart, payload) => {
  let index = cart.findIndex((item) => item.id === payload.id);
  return cart.map((item, idx) =>
    idx === index ? { ...item, quantity: item.quantity - 1 } : item
  );
};
