import { createSlice } from "@reduxjs/toolkit";

const navbarSlice = createSlice({
  name: "navbar",
  initialState: {
    displayNavbar: false,
  },
  reducers: {
    toggleNavbar: (state) => {
      state.displayNavbar = !state.displayNavbar;
    },
  },
});

export const { toggleNavbar } = navbarSlice.actions;

export default navbarSlice.reducer;
