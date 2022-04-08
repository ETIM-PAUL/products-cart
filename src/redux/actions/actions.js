
import { ActionTypes } from "../constants/action-types"

export const setPosts = (products) => {
  return {
    type: ActionTypes.SET_POSTS,
    payload: products,
  }
}

export const setCategoryTitle = (selectedCategory) => {
  return {
    type: ActionTypes.SET_CATEGORY_TITLE,
    payload: selectedCategory
  }
}

export const setCurrencyType = (selectedCurrency) => {
  return {
    type: ActionTypes.SET_CURRENCY_TYPE,
    payload: selectedCurrency
  }
}
