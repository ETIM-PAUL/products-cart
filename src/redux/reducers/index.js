import { combineReducers } from "redux";
import { productsReducer, cartReducer, } from "./productsReducer";

export const reducer = combineReducers({
  action: productsReducer,
  cart:cartReducer,
});