import React from 'react';
import PropTypes from 'prop-types';
import GridComponent from './gridComponent';

const WineListComponent = ({ wines }) => {
  return (
    <GridComponent columns="3">
      {wines.map((wine) => {
        return (
          <span key={wine.info.rowKey}>
            {wine.info.name} - {wine.ids.length}
          </span>
        );
      })}
    </GridComponent>
  );
};

WineListComponent.propTypes = {
  wines: PropTypes.array.isRequired,
};

export default WineListComponent;
