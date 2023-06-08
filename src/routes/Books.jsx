import BookFormCreator from '../components/BookFormCreator';
import BooksList from '../components/BooksList';
import Navbar from '../components/Navbar';
const Books = () => (
  <div className="wrapper">
    <Navbar />
    <div className="text-wraper">
      
      <BooksList />
      <BookFormCreator />
    </div>
  </div>
);
export default Books;
