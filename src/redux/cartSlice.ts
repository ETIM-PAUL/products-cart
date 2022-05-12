import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";


const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems")!)
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, {payload,type}) => {
      const existingIndex = state.cartItems.findIndex(
        (item:any) => item.id === payload.product.id
      );

      if (existingIndex >= 0) {
        state.cartItems[existingIndex] = {
          ...state.cartItems[existingIndex],
          cartQuantity: state.cartItems[existingIndex].cartQuantity += 1,
        };
        toast.info(`${payload.product.name} quantity increased`, {
          position: "top-center",
        })
      } else {
        let tempProductItem = { ...payload.product, cartQuantity: 1, imageIndex: 0,selectedAttributes:payload.attr };
        state.cartItems.push(tempProductItem);
        toast.success(`${payload.product.name} added to cart`, {
          position: "top-center",
        })
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    decreaseCart(state, {payload, type}) {
      const itemIndex = state.cartItems.findIndex(
        (item:any) => item.id === payload.id
      );

      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;

        toast.info(`${payload.name} quantity decreased in cart`, {
          position: "top-center",
      })
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.cartItems.filter(
          (item:any) => item.id !== payload.id
        );

        state.cartItems = nextCartItems;

        toast.error(`${payload.name} removed from cart`, {
          position: "top-center",
        })
      }
      
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    getTotals(state) {
      let totalPrice = 0;
      let total = 0

      let { quantity } = state.cartItems.reduce(
        (cartTotal:any, cartItem:any) => {
          const {cartQuantity } = cartItem;
          cartTotal.quantity += cartQuantity;       
          return cartTotal;
        },
        {
          quantity: 0,
        }
        );
        state.cartItems.forEach((i: any) => {
          const pricesProxy = JSON.parse(JSON.stringify(i.prices))
          const amount = pricesProxy.filter((x: any) => x.currency.symbol === localStorage.getItem("currency"))[0]
          total += amount.amount * i.cartQuantity
        })
        totalPrice = parseFloat(total.toFixed(2));
        state.cartTotalAmount = totalPrice;
        state.cartTotalQuantity = quantity;
      },

      changeImageIndexUp(state, {payload,type}) {
        const existingIndex = state.cartItems.findIndex(
          (item:any) => item.id === payload.id
        );
        
        if (existingIndex >= 0) {
         if(state.cartItems[existingIndex].imageIndex === (payload.gallery.length-1)){
           state.cartItems[existingIndex].imageIndex = 0
         }
         else if(state.cartItems[existingIndex].imageIndex >= 0){
           state.cartItems[existingIndex].imageIndex += 1
         }
        }
  
      },

      changeImageIndexDown(state, {payload,type}) {
        const existingIndex = state.cartItems.findIndex(
          (item:any) => item.id === payload.id
        );
        if (existingIndex >= 0) {
         if(state.cartItems[existingIndex].imageIndex > 0){
           state.cartItems[existingIndex].imageIndex -= 1
         }
         else if(state.cartItems[existingIndex].imageIndex === 0){
          state.cartItems[existingIndex].imageIndex = (payload.gallery.length-1)
        }
        }
  
      },
  }
});

export const { addToCart, decreaseCart,  getTotals, changeImageIndexUp, changeImageIndexDown } =
  cartSlice.actions;

export default cartSlice.reducer;