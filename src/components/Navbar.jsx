import { NavLink } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';

const links = [
  { path: '/', text: 'HOME' },
  { path: '/books', text: 'BOOKS' },
  { path: '/categories', text: 'CATEGORIES' },
];
const Navbar = () => (
  <nav className="navbar-wrapper">
    <div className="navbar">
      <h1>Bookstore CMS</h1>
      <ul>
        {links.map((link) => (
          <li key={link.text}>
            <NavLink to={link.path}>{link.text}</NavLink>
          </li>
        ))}
      </ul>
    </div>
    <CgProfile className="icon" />
  </nav>
);
export default Navbar;
