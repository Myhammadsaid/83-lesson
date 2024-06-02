import { createStore, combineReducers } from "redux";
import { wishlistReducer } from "./reducer/wishlist";
import { cartReducer } from "./reducer/cart";

const rootReducer = combineReducers({
  wishlist: wishlistReducer,
  cart: cartReducer,
});

export const store = createStore(rootReducer);
