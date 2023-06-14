import { useDispatch } from 'react-redux';
import { add } from '../redux/books/booksSlice';

const BookFormCreator = () => {
  const dispatch = useDispatch;
  return (
    <form>
      <input type="text" name="title" placeholder="Book title" />
      <select name="category" placeholder="Category">
        <option value="fiction">Fiction</option>
        <option value="non-fiction">Non-fiction</option>
        <option value="sci-fi">Science Fiction</option>
        <option value="fantasy">Fantasy</option>
      </select>
      <button type="button" name="add" onClick={() => dispatch(add())}> Add </button>
    </form>
  );
};

export default BookFormCreator;