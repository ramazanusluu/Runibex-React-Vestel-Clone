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
    removeFromCard(state, action) {
      const nextCardItems = state.cardItems.filter(
        (cardItem) => cardItem.ID !== action.payload.ID
      );
      state.cardItems = nextCardItems;
      localStorage.setItem("cardItems", JSON.stringify(state.cardItems));
      toast.error(`${action.payload.DisplayName}, sepetten çıkarıldı.`, {
        position: "bottom-right",
      });
    },
    decreaseCard(state, action) {
      const itemIndex = state.cardItems.findIndex(
        (cardItem) => cardItem.ID === action.payload.ID
      );
      if (state.cardItems[itemIndex].cardQuantity > 1) {
        state.cardItems[itemIndex].cardQuantity -= 1;

        toast.info(`${action.payload.DisplayName}, mikarı 1 azaltıldı.`, {
          position: "bottom-right",
        });
      } else if (state.cardItems[itemIndex].cardQuantity === 1) {
        const nextCardItems = state.cardItems.filter(
          (cardItem) => cardItem.ID !== action.payload.ID
        );
        state.cardItems = nextCardItems;

        toast.error(`${action.payload.DisplayName}, sepetten çıkarıldı.`, {
          position: "bottom-right",
        });
      }
      localStorage.setItem("cardItems", JSON.stringify(state.cardItems));
    },
    increaseCard(state, action) {
      state.cardItems.map((cardItem) => {
        if (
          cardItem.ID === action.payload.ID &&
          cardItem.cardQuantity <
            cardItem.SelectionList[0].OptionList[0].Quantity
        ) {
          cardItem.cardQuantity += 1;
          toast.info(`${action.payload.DisplayName}, miktarı 1 arttırıldı.`, {
            position: "bottom-right",
          });
        } else if (
          cardItem.ID === action.payload.ID &&
          cardItem.cardQuantity ===
            cardItem.SelectionList[0].OptionList[0].Quantity
        ) {
          toast.error(`${action.payload.DisplayName}, stokta kalmadı`, {
            position: "bottom-right",
          });
        }
        return true;
      });
      localStorage.setItem("cardItems", JSON.stringify(state.cardItems));
    },
  },
});

export const { addToCard, removeFromCard, decreaseCard, increaseCard } = cardSlice.actions;

export default cardSlice.reducer;
