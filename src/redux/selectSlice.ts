import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedCategory:localStorage.getItem("category"),
  selectedCurrency:localStorage.getItem("currency"),
  selectedCurrencySymbol:localStorage.getItem("currency-symbol"),
};

const selectSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCategory(state, {payload}) {
      state.selectedCategory = payload
      localStorage.setItem("category", payload);
    },
    setCurrency(state, {payload})  {
      state.selectedCurrency = payload
      localStorage.setItem("currency", payload);
    },
    setCurrencySymbol(state, {payload})  {
      state.selectedCurrency = payload
      localStorage.setItem("currency-symbol", payload);
    },
  }
});

export const { setCategory, setCurrency, setCurrencySymbol } =
selectSlice.actions;

export default selectSlice.reducer;