import { configureStore } from "@reduxjs/toolkit";
import cardReducer, {getTotals} from "./card/cardSlice";

export const store = configureStore({
  reducer: {
    card: cardReducer,
  },
});

store.dispatch(getTotals())