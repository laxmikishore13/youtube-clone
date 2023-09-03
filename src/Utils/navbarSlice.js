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
    closeNavbar: (state) => {
      state.displayNavbar = true;
    },
  },
});

export const { toggleNavbar, closeNavbar } = navbarSlice.actions;

export default navbarSlice.reducer;
