import { configureStore } from "@reduxjs/toolkit"
import selectReducer from "./selectSlice"
import cartReducer from "./cartSlice"

export const store = configureStore({
  reducer: {
    selection: selectReducer,
    cart: cartReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;