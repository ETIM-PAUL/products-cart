import { toast } from "react-toastify"
import { ActionTypes } from "../constants/action-types"

const initialState = {
  products:[],
  selectedCategory:"",
  selectedCurrency:"",
  cart:{
    cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) :[],
    cartTotalQuantity:0,
    cartTotalAmount: 0,
  }
}

export const productsReducer = (state=initialState, {type,payload}) => {
  switch (type) {
    case ActionTypes.SET_CATEGORY_TITLE:
      return {
        selectedCategory: payload
      }
      case ActionTypes.SET_CURRENCY_TYPE:
        return {
          selectedCurrency: payload
        }
    default:
      return state;
  }
}

export const cartReducer = (state=initialState.cart, {type,payload}) => {
  switch (type) {
    case ActionTypes.ADD_TO_CART:
      const productIndex = state.cartItems.findIndex( item => item.id === payload.id);
      if(productIndex >= 0) {
        state.cartItems[productIndex].cartQuantity += 1;
        toast.info(`${payload.name} quantity increased`, {
          position: "top-center",
        })
      } else {
        const tempProduct = {...payload, cartQuantity: 1}
        toast.success(`${payload.name} added to cart`, {
          position: "top-center",
        })
        state.cartItems.concat(tempProduct);
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      return {...state, ...state.cartItems}
      
    case ActionTypes.DECREASE_FROM_CART:
      const itemIndex = state.cartItems.findIndex( item => item.id === payload.id);
      if(state.cartItems[itemIndex].cartQuantity > 1){
        state.cartItems[itemIndex].cartQuantity -= 1

        toast.info(`${payload.name} quantity decreased in cart`, {
          position: "top-center",
      })
    } else if (state.cartItems[itemIndex].cartQuantity === 1) {
       const nextCartItems = state.cartItems.filter(
         (cartItem) => cartItem.id !== payload.id
       );

       state.cartItems = nextCartItems;

       toast.error(`${payload.name} removed from cart`, {
        position: "top-center",
      })
      }
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      return {...state, ...state.cartItems}
        
        
        default:
          return state;
        } 
  }

