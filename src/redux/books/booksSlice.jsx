import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';

const getBooksURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/rdEZy48wnbkIXfhABIXi/books';
const addBookURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/rdEZy48wnbkIXfhABIXi/books';
const removeBookURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/rdEZy48wnbkIXfhABIXi/books'

const initialState = {
  books: [],
}

export const getBooks = createAsyncThunk('books/getBooks', async (thunkAPI) => {
  try {
    const response = await axios(getBooksURL);
    return response.data;
  } catch (err) {
    console.log(err);
    return thunkAPI.rejectWithVAlue('something went wrong');
  }
});

export const postBook = createAsyncThunk('books/addBook', async (book, thunkAPI) => {
  const bookObj = {
    item_id: uuidv4(),
    title: book.title,
    author: book.author,
    category: book.category,
  };
  try {
    const response = await axios.post(addBookURL, bookObj);
    return response.data;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue('something went wrong');
  }
});

export const removeBook = createAsyncThunk('books/removeBook', async (bookId, thunkAPI) => {
  try {
    const response = await axios.delete(`${removeBookURL}/${bookId.id}`);
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
     .addCase(getBooks.pending, (state) => {
      state.isLoading = true;      
    })
    .addCase(getBooks.fulfilled, (state, action) => {
      state.isLoading = false;
      state.books = action.payload;
    })
    .addCase(getBooks.rejected, (state) => {
      state.isLoading = false;
    }) 
     .addCase(postBook.pending, (state) => {
      state.isLoading = true;
    }) 
     .addCase(postBook.fulfilled, (state) => {
      state.isLoading = false;
    }) 
     .addCase(postBook.rejected, (state) => {
      state.isLoading = false;
    }) 
    .addCase(removeBook.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(removeBook.fulfilled, (state) => {
       state.isLoading = false;
    })
    .addCase(removeBook.rejected, (state, action) => {
      console.log(action);
      state.isLoading = false;
    });
  },
});

export const { add, remove } = booksSlice.actions;
export default booksSlice.reducer;