import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import PropTypes from 'prop-types';

const GridComponent = ({ children }) => {
  return (
    <div className="row">
      {children.map((child, index) => {
        return (
          <div key={index} className="col-sm-6">
            {child}
          </div>
        );
      })}
    </div>
  );
};

GridComponent.propTypes = {
  children: PropTypes.array.isRequired,
};

export default GridComponent;
