import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavComponent = ({ location }) => {
  return (
    <nav className="navbar navbar-light bg-faded">
      <a className="navbar-brand" href="/">Wine Cooler</a>
      <ul className="navbar-nav">
        <li role="presentation" className={location.pathname === '/inventory' ? 'nav-item active' : 'nav-item'}>
          <Link to="/inventory" className="nav-link">Inventory</Link>
        </li>
        <li role="presentation" className={location.pathname === '/archive' ? 'nav-item active' : 'nav-item'}>
          <Link to="/archive" className="nav-link">Archive</Link>
        </li>
      </ul>
    </nav>
  );
};

NavComponent.propTypes = {
  location: PropTypes.object.isRequired,
};

export default NavComponent;
