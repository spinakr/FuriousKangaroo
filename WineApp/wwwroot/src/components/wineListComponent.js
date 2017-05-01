import React from 'react';
import PropTypes from 'prop-types';
import GridComponent from './gridComponent';
import Winecomponent from './wineComponent';

const WineListComponent = ({ wines }) => {
  return (
    <GridComponent columns="3">
      {wines.map((wine, index) => {
        return <Winecomponent wine={wine} key={index} />;
      })}
    </GridComponent>
  );
};

WineListComponent.propTypes = {
  wines: PropTypes.array.isRequired,
};

export default WineListComponent;
