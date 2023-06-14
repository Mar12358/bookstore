import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
}

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
});

export default categoriesSlice.reducer;