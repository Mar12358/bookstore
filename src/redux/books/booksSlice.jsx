import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';

const getBooksURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/rdEZy48wnbkIXfhABIXi/books';
const addBookURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/rdEZy48wnbkIXfhABIXi/books';
const initialState = {
  books: [
    /* {
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
    } */
  ],
}

export const postBook = createAsyncThunk('books/addBook', async (book, thunkAPI) => {
  const bookObj = {
    item_id: uuidv4(),
    title: book.title,
    author: book.author,
    category: book.category,
  };
  console.log(bookObj);
  try {
    const response = await axios.post(addBookURL, bookObj);
    return response.data;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue('something went wrong');
  }
});

const booksSlice = createSlice({
  name: 'books',
  initialState,
  extraReducers: (builder) => {builder
     .addCase(postBook.pending, (state) => {
      state.isLoading = true;
    }) 
     .addCase(postBook.fulfilled, (state, action) => {
      state.isLoading = true;
      //console.log(action.meta.arg)
      state.books.push(action.meta.arg)
    }) 
     .addCase(postBook.rejected, (state) => {
//      console.log(action);
      state.isLoading = false;
    }) 
  },
});

export const { add, remove } = booksSlice.actions;
export default booksSlice.reducer;