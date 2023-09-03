import { createSlice } from "@reduxjs/toolkit";

const searchResultsSlice = createSlice({
  name: "searchResults",
  initialState: {
    results: {},
  },
  reducers: {
    addResults: (state, action) => {
      state.results = { ...state.results, ...action.payload };
    },
  },
});

export const { addResults } = searchResultsSlice.actions;

export default searchResultsSlice.reducer;
