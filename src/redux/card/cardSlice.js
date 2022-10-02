import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cardItems: localStorage.getItem("cardItems")
    ? JSON.parse(localStorage.getItem("cardItems"))
    : [],
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
        state.cardItems[itemIndex].cardQuantity += 1;
        toast.info(
          `${state.cardItems[itemIndex].DisplayName}, miktarı 1 arttırıldı.`,
          {
            position: "bottom-right",
          }
        );
      } else {
        const tempProduct = { ...action.payload, cardQuantity: 1 };
        state.cardItems.push(tempProduct);
        toast.success(`${action.payload.DisplayName}, sepete eklendi.`, {
          position: "bottom-right",
        });
      }
      localStorage.setItem("cardItems", JSON.stringify(state.cardItems));
    },
  },
});

export const { addToCard } = cardSlice.actions;

export default cardSlice.reducer;
