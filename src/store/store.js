import { configureStore } from "@reduxjs/toolkit";
import { QuoteSlice } from "./quote/quoteSlice";

export const store = configureStore({
	reducer: {
		quote: QuoteSlice.reducer,
	},
});
