import BookItem from "./BookItem";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect,  } from "react";
import { getBooks } from "../redux/books/booksSlice";
const BooksList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  });
  
  const { books } = useSelector((state) => state.books);
  return (
    <>
      {Object.keys(books).map((id) => (
        <BookItem key={id} book={{...books[id][0], id: id}} />
      ))}
    </>
  );
};

export default BooksList;