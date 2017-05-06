import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavComponent = ({ location, filterChanged }) => {
  return (
    <div>
      <nav className="navbar stixy-top navbar-toggleable-md navbar-light" style={{ backgroundColor: '#e3f2fd' }}>
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button" data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <Link to="/" className="navbar-brand mb-0 nav-link">Wine Cooler</Link>

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
      <nav className="navbar fixed-bottom navbar-light" >
        <div className="btn-group" style={{ float: 'none', display: 'inline-block', textAlign: 'center' }}>
          <label className="btn btn-outline-info active">
            <input type="radio" name="options" id="*" onChange={() => filterChanged('*')} />*
          </label>
          <label className="btn btn-outline-danger">
            <input type="radio" name="options" id="Rød" onChange={() => filterChanged('Rød')} />Rød
          </label>
          <label className="btn btn-outline-secondary">
            <input type="radio" name="options" id="Hvit" onChange={() => filterChanged('Hvit')} />Hvit
          </label>
          <label className="btn btn-outline-warning">
            <input type="radio" name="options" id="Muserende" onChange={() => filterChanged('Muserende')} />Muserende
          </label>
        </div>
      </nav>
    </div>
  );
};

NavComponent.propTypes = {
  location: PropTypes.object.isRequired,
  filterChanged: PropTypes.func.isRequired,
};

export default NavComponent;
