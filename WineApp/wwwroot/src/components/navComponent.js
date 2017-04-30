import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavComponent = ({ location }) => {
  return (
    <ul className="nav nav-pills nav-justified">
      <li role="presentation" className={location.pathname === '/inventory' ? 'active' : ''}>
        <Link to="/inventory">Inventory</Link>
      </li>
      <li role="presentation" className={location.pathname === '/archive' ? 'active' : ''}>
        <Link to="/archive">Archive</Link>
      </li>
    </ul>
  );
};

NavComponent.propTypes = {
  location: PropTypes.object.isRequired,
};

export default NavComponent;
