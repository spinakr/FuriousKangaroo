import React from 'react';
import PropTypes from 'prop-types';

const WineComponent = ({ wine }) => {
  return (
    <div className="card" key={wine.info.rowKey}>
      <div className="card-block">
        <h3 className="card-title">{wine.info.name} </h3>
        <p className="card-text">Count: {wine.ids.length}</p>
        <button
          className="btn btn-primary"
          type="button"
          data-toggle="collapse"
          data-target={`#infoSection-${wine.info.rowKey}`}
          aria-expanded="false"
          aria-controls={`infoSection-${wine.info.rowKey}`}
        >
          Info
        </button>

        <div className="collapse" id={`infoSection-${wine.info.rowKey}`}>
          <div className="card card-block">
            <ul>
              <li>Producer: {wine.info.producer}</li>
              <li>vintage: {wine.info.vintage}</li>
              <li>Area: {wine.info.area}</li>
              <li>Fruit: {wine.info.fruit}</li>
              <li>Fruit: {wine.info.boughtDate}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

WineComponent.propTypes = {
  wine: PropTypes.object.isRequired,
};

export default WineComponent;
