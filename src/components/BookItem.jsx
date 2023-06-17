import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const BookItem = ({ book }) => {
  const dispatch = useDispatch();
  
  return (
    <div className="book-item">
      <div className="book-info">
        <p className="category">{book[0].category}</p>
        <h3 className="title">{book[0].title}</h3>
        <p className="author">{book[0].author}</p>
        <div className="buttons">
          <button className="link-btn">Comments</button>
          <button className="link-btn" onClick={() => {
            const id = book.item_id;
            dispatch(removeBook({ id }));
            }}>
              Remove
          </button>
          <button className="link-btn">Comments</button>
        </div>
      </div>
      <div className="complete-progress-grid">
        <div></div>
        <div className="circle"><CircularProgressbar value={60} /></div>
        <div className="percent-completed">
          <p className="percent">60%</p>
          <p className="completed">Completed</p>
        </div>
      </div>
      <div className="chapter-info">
          <p className="current-chapter">CURRENT CHAPTER</p>
          <p className="chapter">Chapter 17</p>
          <button className="btn-update-progress">UPDATE PROGRESS</button>
        </div>
    </div>
  );
};
BookItem.propTypes = {
  
  book: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
  }).isRequired,
};
export default BookItem;