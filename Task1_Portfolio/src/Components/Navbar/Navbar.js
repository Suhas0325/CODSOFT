


import './Navbar.css';
import { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='navbar'>
      <div className='Portfolio'>
        <h2>Portfolio</h2>
      </div>
      <button className='menu-button' onClick={toggleMenu}>
        &#9776;
      </button>
      <div className={`links ${isOpen ? 'open' : ''}`}>
        <ul className='navs'>
          <li>
            <Link to='introduction' smooth={true} duration={500} style={{ textDecoration: 'none', color: 'black' }}>
              Home
            </Link>
          </li>
          <li>
            <Link to='aboutme' smooth={true} duration={500} style={{ textDecoration: 'none', color: 'black' }}>
              About Me
            </Link>
          </li>
          <li>
            <Link to='skills' smooth={true} duration={500} style={{ textDecoration: 'none', color: 'black' }}>
              Skills
            </Link>
          </li>
          <li>
            <Link to='Projects' smooth={true} duration={500} style={{ textDecoration: 'none', color: 'black' }}>
              Projects
            </Link>
          </li>
          <li>
            <Link to='contact' smooth={true} duration={500} style={{ textDecoration: 'none', color: 'black' }}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
