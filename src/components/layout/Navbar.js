import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Navbar function returninng navbar with
// icon, title & styling
const Navbar = ({ icon, title }) => {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <i className={icon} /> {title}
      </h1>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/About'>About</Link>
        </li>
      </ul>
    </nav>
  );
};

// Default props used in function
Navbar.defaultProps = {
  title: 'Github Finder',
  icon: 'fab fa-github',
};

// Proptypes used to check type of data
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
