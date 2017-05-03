import React from 'react';
import PropTypes from 'prop-types';
import Winecomponent from './wineComponent';

const WineListComponent = ({ wines }) => {
  return (
    <div className="">
      {wines.map((wine, index) => {
        return wine.isHidden === false ? <Winecomponent wine={wine} key={index} /> : '';
      })}
    </div>
  );
};

WineListComponent.propTypes = {
  wines: PropTypes.array.isRequired,
};

export default WineListComponent;
