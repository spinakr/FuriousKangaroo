import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavComponent = ({ location }) => {
  return (
    <div>
      <nav className="navbar stixy-top navbar-toggleable-md navbar-light" style={{ backgroundColor: '#e3f2fd' }}>
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>

        <h1 className="navbar-brand mb-0">Wine Cooler</h1>

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
        <div className="btn-group" data-toggle="buttons" style={{ float: 'none', display: 'inline-block', textAlign: 'center' }}>
          <label className="btn btn-outline-info active">
            <input type="radio" name="options" id="option1" autoComplete="off" />*
          </label>
          <label className="btn btn-outline-danger">
            <input type="radio" name="options" id="option2" autoComplete="off" />Rød
          </label>
          <label className="btn btn-outline-secondary">
            <input type="radio" name="options" id="option3" autoComplete="off" />Hvit
          </label>
          <label className="btn btn-outline-warning">
            <input type="radio" name="options" id="option4" autoComplete="off" />Muserende
          </label>
        </div>
      </nav>
    </div>
  );
};

NavComponent.propTypes = {
  location: PropTypes.object.isRequired,
};

export default NavComponent;
