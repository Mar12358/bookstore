const BookFormCreator = () => {
  return (
    <form>
      <input type="text" name="title" placeholder="Book title" />
      <select name="category" placeholder="Category">
        <option value="fiction">Fiction</option>
        <option value="non-fiction">Non-fiction</option>
        <option value="sci-fi">Science Fiction</option>
        <option value="fantasy">Fantasy</option>
      </select>
      <button type="button" name="add"> Add </button>
    </form>
  );
};

export default BookFormCreator;