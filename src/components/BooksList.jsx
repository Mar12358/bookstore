import BookItem from "./BookItem";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect,  } from "react";
import { getBooks } from "../redux/books/booksSlice";
const BooksList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  },[dispatch]);
  
  const { books } = useSelector((state) => state.books);
  
  return (
    <>
      {books.map((book) => (
        <BookItem key={book.item_id} book={book} />
      ))}
    </>
  );
};

export default BooksList;