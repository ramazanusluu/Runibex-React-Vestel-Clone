import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./card/cardSlice";

export const store = configureStore({
  reducer: {
    card: cardReducer,
  },
});
