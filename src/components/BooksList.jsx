import BookItem from "./BookItem";

const BooksList = () => {
  const books = [
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
  ];
  return (
    <>
      {books.map((book) => (
        <BookItem key={book.id} book={book} />
      ))}
    </>
  );
};

export default BooksList;