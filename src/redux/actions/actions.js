
import { ActionTypes } from "../constants/action-types"

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
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

export const addToCart = (product) => {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: product
  }
}

export const decreaseCart = (product) => {
  return {
    type: ActionTypes.DECREASE_FROM_CART,
    payload: product
  }
}
