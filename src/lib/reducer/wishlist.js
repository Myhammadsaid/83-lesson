import { WISHLIST_TOGGLE } from "../action/action";

const initialState = {
  value: JSON.parse(localStorage.getItem("wishlist")) || [],
};

export const wishlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case WISHLIST_TOGGLE:
      return {
        ...state,
        value: toggleWishlistReducer(state.value, action.payload),
      };
    default:
      return state;
  }
};

const toggleWishlistReducer = (wishlist, payload) => {
  let index = wishlist.findIndex((item) => item.id === payload.id);
  if (index < 0) {
    return [...wishlist, payload];
  } else {
    return wishlist.filter((item) => item.id !== payload.id);
  }
};
