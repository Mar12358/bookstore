import { useDispatch, useSelector } from 'react-redux';
import { add } from '../redux/books/booksSlice';
 import { useState } from 'react';

const BookFormCreator = () => {
  const dispatch = useDispatch();
  const [id, setId] = useState('');
  const [title, setTitle] = useState(''); // update state to see title
  const [category, setCategory] = useState(''); // state for category value
  const books = useSelector(state => state.books.books);
  console.log(books)
  const handleTitleChange = (e) => {
    setTitle(e.target.value); // update title state when input changes
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value); // updates caregory state when selection changes
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setId((books.length + 1).toString());
    console.log(title, category);
    dispatch(add({ id, title, category })); // call "add" action passin title and category as argument
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder="Book title" value={title} onChange={handleTitleChange}/>
      <select name="category" placeholder="Category" value={category} onChange={handleCategoryChange}>
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