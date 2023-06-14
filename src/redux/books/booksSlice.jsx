import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [
    {
      id: "1",
      title: "Book 1",
      category: "Fiction"
    },
    {
      id: "2",
      title: "Book 2",
      category: "Non-fiction"
    },
    {
      id: "3",
      title: "Book 3",
      category: "Science Fiction"
    },
    {
      id: "4",
      title: "Book 4",
      category: "Fantasy"
    }
  ],
}

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    add: (state) => {
      state.books.push({
        id: "New id",
        titlle: "New Title",
        category: "Category"
      })
    },
    remove: (state, action) => {
      remove(state)
    },
  }
});

export const { add, remove } = booksSlice.actions;
export default booksSlice.reducer;