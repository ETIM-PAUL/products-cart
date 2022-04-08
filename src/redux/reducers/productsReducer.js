import { ActionTypes } from "../constants/action-types"

const initialState = {
  products:[],
  selectedCategory:"",
  selectedCurrency:""

}
export const productsReducer = (state=initialState, {type,payload}) => {
  switch (type) {
    case ActionTypes.SET_POSTS:
      return {...state, posts:payload};
    case ActionTypes.SET_CATEGORY_TITLE:
      return {
        selectedCategory: [payload]
      }
      case ActionTypes.SET_CURRENCY_TYPE:
        return {
          selectedCurrency: [payload]
        }
    default:
      return state;
  }
}

export const selectedProductReducer = (state={}, {type,payload}) => {
  switch (type) {
    case ActionTypes.SELECTED_POST:
      return {...state, ...payload};
    case ActionTypes.REMOVE_SELECTED_POST:
      return {};
    default:
      return state;
  }
}
