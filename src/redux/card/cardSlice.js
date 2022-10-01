import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cardItems: [],
  cardTotalQuantity: 0,
  cardTotalAmount: 0,
};
export const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    addToCard(state, action) {
      state.cardItems.push(action.payload);
    },
  },
});

export const { addToCard } = cardSlice.actions;

export default cardSlice.reducer;
