import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [
    {
      id: "item1",
      title: "The Great Gatsby",
      author: "John Smith",
      category: "Fiction"
    },
    {
      id: "item2",
      title: "Anna Karenina",
      author: "Leo Tolstoy",
      category: "Fiction"
    },
    {
      id: "item3",
      title: "The Selfish Gene",
      author: "Richard Dawkins",
      category: "Nonfiction"
    }
  ],
}

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    add: (state, action) => {
      state.books.push(action.payload)
    },
    remove: (state) => {
      remove(state)
    },
  }
});

export const { add, remove } = booksSlice.actions;
export default booksSlice.reducer;