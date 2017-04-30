import React from 'react';
import PropTypes from 'prop-types';

const WineListComponent = ({ wines }) => {
  return (
    <div>
      {wines.map((wine, index) => {
        return (
          <p key={index}> {wine.name} </p>
        );
      })}
    </div>
  );
};

WineListComponent.propTypes = {
  wines: PropTypes.array.isRequired,
};

export default WineListComponent;
