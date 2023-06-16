import { useDispatch, useSelector } from 'react-redux';
import { add } from '../redux/books/booksSlice';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { postBook } from '../redux/books/booksSlice';

const BookFormCreator = () => {
  const dispatch = useDispatch();
  const [id, setId] = useState('');
  const [title, setTitle] = useState(''); // update state to see title
  const [author, setAuthor] = useState(''); // update state to see author
  const [category, setCategory] = useState(''); // state for category value
  const books = useSelector(state => state.books.books);
  console.log(books)

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
      <button type="submit" name="add"> Add </button>
    </form>
  );
};

export default BookFormCreator;