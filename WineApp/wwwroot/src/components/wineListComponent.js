import React from 'react';
import PropTypes from 'prop-types';

const WineListComponent = ({ wines }) => {
  const chunked = [];
  const size = 3;
  for (let i = 0; i < wines.length; i += size) {
    chunked.push(wines.slice(i, i + size));
  }
  return (
    <div>
      {chunked.map((chunk) => {
        return (
          <div className="row">
            {chunk.map((wine) => {
              return (
                <div className="col-md-4">
                  {wine.info.name} - {wine.ids.length}
                </div>
              );
            })}
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
