import { NavLink } from 'react-router-dom';

const links = [
  { path: '/', text: 'Home' },
  { path: '/books', text: 'Books' },
  { path: '/categories', text: 'Categories' },
];
const Navbar = () => (
  <nav className="navbar">
    <h1>Bookstore CMS</h1>
    <ul>
      {links.map((link) => (
        <li key={link.text}>
          <NavLink to={link.path}>{link.text}</NavLink>
        </li>
      ))}
    </ul>
  </nav>
);
export default Navbar;
