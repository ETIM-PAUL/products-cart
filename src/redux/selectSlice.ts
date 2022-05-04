import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedCategory:"all",
  selectedCurrency:"USD"
};

const selectSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCategory(state, {payload,type}) {
      state.selectedCategory = payload
      localStorage.setItem("category", payload);
    },
    setCurrency(state, {payload, type})  {
      state.selectedCurrency = payload
      localStorage.setItem("currency", payload);
    },
  }
});

export const { setCategory, setCurrency } =
selectSlice.actions;

export default selectSlice.reducer;