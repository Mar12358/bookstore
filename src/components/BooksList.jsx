import BookItem from "./BookItem";
import { useSelector } from 'react-redux';

const BooksList = () => {
  const { books } = useSelector((state) => state.books);
  return (
    <>
      {books.map((book) => (
        <BookItem key={book.id} book={book} />
      ))}
    </>
  );
};

export default BooksList;