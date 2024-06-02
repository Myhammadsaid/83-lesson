export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const INCREMENT_CART = "INCREMENT_CART";
export const DECREMENT_CART = "DECREMENT_CART";
export const DELETE_ALL_CART = "DELETE_ALL_CART";
export const WISHLIST_TOGGLE = "WISHLIST_TOGGLE";

export const addToCart = (payload) => ({
  type: ADD_TO_CART,
  payload,
});

export const removeFromCart = (payload) => ({
  type: REMOVE_FROM_CART,
  payload,
});

export const incrementCart = (payload) => ({
  type: INCREMENT_CART,
  payload,
});

export const decrementCart = (payload) => ({
  type: DECREMENT_CART,
  payload,
});

export const deleteAllCart = () => ({
  type: DELETE_ALL_CART,
});

export const toggleWishlist = (payload) => ({
  type: WISHLIST_TOGGLE,
  payload,
});
