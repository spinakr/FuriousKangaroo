import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavComponent = ({ location }) => {
  return (
    <nav className="navbar stixy-top navbar-toggleable-md navbar-light" style={{ backgroundColor: '#e3f2fd' }}>
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>

      <a className="navbar-brand" href="/">Wine Cooler</a>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li role="presentation" className={location.pathname === '/inventory' ? 'nav-item active' : 'nav-item'}>
            <Link to="/inventory" className="nav-link">Inventory</Link>
          </li>
          <li role="presentation" className={location.pathname === '/archive' ? 'nav-item active' : 'nav-item'}>
            <Link to="/archive" className="nav-link">Archive</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

NavComponent.propTypes = {
  location: PropTypes.object.isRequired,
};

export default NavComponent;
