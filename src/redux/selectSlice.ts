import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedCategory:localStorage.getItem("category"),
  selectedCurrency:localStorage.getItem("currency"),
};

const selectSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCategory(state, {payload}) {
      localStorage.setItem("category", payload);
      state.selectedCategory = payload
    },
    setCurrency(state, {payload})  {
      localStorage.setItem("currency", payload);
      state.selectedCurrency = payload
    },
  }
});

export const { setCategory, setCurrency } =
selectSlice.actions;

export default selectSlice.reducer;