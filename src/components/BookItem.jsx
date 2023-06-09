import PropTypes from 'prop-types';

const BookItem = ({ book }) => {
  return (
    <div className="book-item">
      <h3>{book.title}</h3>
      <p>{book.category}</p>
      <button>Remove</button>
    </div>
  );
};
BookItem.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};
export default BookItem;