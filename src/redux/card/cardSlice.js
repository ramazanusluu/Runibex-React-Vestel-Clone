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
      const itemIndex = state.cardItems.findIndex(
        (item) => item.ID === action.payload.ID
      );
      if (itemIndex >= 0) {
        state.cardItems[itemIndex].cadQuantity += 1;
      } else {
        const tempProduct = { ...action.payload, cadQuantity: 1 };
        state.cardItems.push(tempProduct);
      }
    },
  },
});

export const { addToCard } = cardSlice.actions;

export default cardSlice.reducer;
