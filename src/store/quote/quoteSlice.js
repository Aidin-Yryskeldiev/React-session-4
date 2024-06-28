import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	quotes: [],
};

export const QuoteSlice = createSlice({
	name: "quote",
	initialState,
	reducers: {
		addQuote: (state, action) => {
			state.quotes.push(action.payload);
		},
	},
});

export const quoteActions = QuoteSlice.actions;

export default QuoteSlice.reducer;
