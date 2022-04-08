import { combineReducers } from "redux";
import { productsReducer, selectedProductReducer, } from "./productsReducer";

export const reducer = combineReducers({
  action: productsReducer,
  product:selectedProductReducer,
});