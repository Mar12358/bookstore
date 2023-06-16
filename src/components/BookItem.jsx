import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

const BookItem = ({ book }) => {
  const dispatch = useDispatch();
  return (
    <div className="book-item">
      <h3>{book.title}</h3>
      <p>{book.category}</p>
      <button onClick={() => {
        const id = book.id;
        dispatch(removeBook({ id }));
        }}>Remove</button>
    </div>
  );
};
BookItem.propTypes = {
  
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};
export default BookItem;