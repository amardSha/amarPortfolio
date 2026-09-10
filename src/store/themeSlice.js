import { createSlice } from "@reduxjs/toolkit";

const initialTheme =
  typeof window !== "undefined" && localStorage.getItem("portfolio-theme")
    ? localStorage.getItem("portfolio-theme")
    : "dark";

const themeSlice = createSlice({
  name: "theme",
  initialState: { value: initialTheme },
  reducers: {
    setTheme(state, action) {
      state.value = action.payload;
      localStorage.setItem("portfolio-theme", action.payload);
    }
  }
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
