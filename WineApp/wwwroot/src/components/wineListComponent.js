import React from 'react';
import PropTypes from 'prop-types';

const WineListComponent = ({ wines }) => {
  return (
    <div>
      {wines.map((wine, index) => {
        return (
          <div key={index}>
            {wine.info.name} - {wine.ids.length}
          </div>
        );
      })}
    </div>
  );
};

WineListComponent.propTypes = {
  wines: PropTypes.array.isRequired,
};

export default WineListComponent;
