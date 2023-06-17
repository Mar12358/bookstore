import BookFormCreator from '../components/BookFormCreator';
import BooksList from '../components/BooksList';
const Books = () => (
  <div className="book-form-wrapper">
    <div className="books-wrapper">
      <BooksList />
    </div>
    <BookFormCreator />
  </div>
);
export default Books;
