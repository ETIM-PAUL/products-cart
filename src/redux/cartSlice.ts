import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems")!)
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const compareItemAttributes = (attribute1:any, attribute2:any) => {
  const keys1 = Object.keys(attribute1);
  const keys2 = Object.keys(attribute2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let key of keys1) {
    if (attribute1[key] !== attribute2[key]) {
      return false;
    }
  }
  return true;
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, {payload,type}) => {
      // console.log(payload)
      const exist = state.cartItems.find(
        (item:any) => item.id === payload.product.id
        );
        if (exist) {
          const existingItemIndex = state.cartItems.findIndex(
            (item:any) => item.id === payload.product.id && compareItemAttributes(item.selectedAttributes,payload.attribute)
          );
          const existingItem = state.cartItems.find(
            (item:any) => item.id === payload.product.id && compareItemAttributes(item.selectedAttributes,payload.attribute)
            );
        if(!existingItem) 
        { 
          let tempProductItem = { ...payload.product, cartQuantity: 1, imageIndex: 0,selectedAttributes:payload.attribute };
          state.cartItems.push(tempProductItem);
        } else 
        if( existingItem){ 
          state.cartItems[existingItemIndex] = {
            ...state.cartItems[existingItemIndex],
            cartQuantity: state.cartItems[existingItemIndex].cartQuantity += 1,
          };
        }
      } 
      else {
        let tempProductItem = { ...payload.product, cartQuantity: 1, imageIndex: 0,selectedAttributes:payload.attribute };
        state.cartItems.push(tempProductItem);
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    
    decreaseCart(state, {payload, type}) {
      const itemIndex = state.cartItems.findIndex(
        (item:any) => item.id === payload.product.id && compareItemAttributes(item.selectedAttributes,payload.attribute)
        );
        if(itemIndex > -1 ){
          if (state.cartItems[itemIndex].cartQuantity > 1) {
            state.cartItems[itemIndex].cartQuantity -= 1;
          } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        //  state.cartItems.splice(itemIndex)
         const nextCartItems = state.cartItems.filter(
          (item:any) => state.cartItems.indexOf(item) !== itemIndex
        );
  
        state.cartItems = nextCartItems;
        }      
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
          (item:any) => item.id === payload.id && compareItemAttributes(item.selectedAttributes,payload.selectedAttributes)
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
          (item:any) => item.id === payload.id && compareItemAttributes(item.selectedAttributes,payload.selectedAttributes)
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