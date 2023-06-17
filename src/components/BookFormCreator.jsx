import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { postBook } from '../redux/books/booksSlice';

const BookFormCreator = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState(''); // update state to see title
  const [author, setAuthor] = useState(''); // update state to see author
  const [category, setCategory] = useState(''); // state for category value

  const handleTitleChange = (e) => {
    setTitle(e.target.value); // update title state when input changes
  };

  const handleAuthorChange = (e) => {
    setAuthor(e.target.value); // update title state when input changes
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value); // updates caregory state when selection changes
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !author || !category) return;
    try {
      dispatch(postBook({ title, author, category })); // call "add" action passin title and category as argument
      setTitle('');
      setAuthor('');
      setCategory('');
    } catch (err) {console.log(err)}
  };

  return (
    <div className="form">
      <p className="add-new-book">ADD NEW BOOK</p>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Book title" value={title} onChange={handleTitleChange}/>
        <input type="text" name="author" placeholder="Book author" value={author} onChange={handleAuthorChange}/>
        <select name="category" placeholder="Category" value={category} onChange={handleCategoryChange}>
        <option value=""></option>
          <option value="fiction">Fiction</option>
          <option value="non-fiction">Non-fiction</option>
          <option value="sci-fi">Science Fiction</option>
          <option value="fantasy">Fantasy</option>
        </select>
        <button className="add-btn" type="submit" name="add"> Add book </button>
      </form>
    </div>
  );
};

export default BookFormCreator;