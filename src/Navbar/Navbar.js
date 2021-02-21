import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';


const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li>
          <Link to="/">Startseite</Link>
        </li>
        <li>
          <Link to="/clickcounter">Klicken Sie auf Zähler</Link>
        </li>
        <li>
          <Link to="/jotto">Jotto</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
