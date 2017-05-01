import React from 'react';
import PropTypes from 'prop-types';
import Winecomponent from './wineComponent';

const WineListComponent = ({ wines }) => {
  return (
    <div className="card-columns">
      {wines.map((wine, index) => {
        return <Winecomponent wine={wine} key={index} />;
      })}
    </div>
  );
};

WineListComponent.propTypes = {
  wines: PropTypes.array.isRequired,
};

export default WineListComponent;
