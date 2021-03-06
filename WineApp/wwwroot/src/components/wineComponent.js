import React from 'react';
import PropTypes from 'prop-types';
import WineInfoComponent from './wineInfoComponent';

const WineComponent = ({ wine }) => {
  const info = wine.info;
  return (
    <div className="card w-100">
      <div
        className="card-header"
        style={{ cursor: 'pointer' }}
        data-toggle="collapse"
        data-target={`#infoSection-${info.rowKey}`}
        aria-expanded="false"
        aria-controls={`infoSection-${info.rowKey}`} key={info.rowKey}
      >
        <h5 className="card-title">{info.name} {wine.ids.length === 1 ? '' : `(${wine.ids.length})`} </h5>
      </div>

      <div className="collapse" id={`infoSection-${info.rowKey}`}>
        <div className="container">

          <div className="row">
            <div className="col-sm-6">
              <WineInfoComponent label="Producer" data={info.producer} />
            </div>
            <div className="col-sm-6">
              <WineInfoComponent label="Vintage" data={info.vintage} />
            </div>
          </div>

          <div className="row">
            <div className="col-sm-6">
              <WineInfoComponent label="Fruit" data={info.fruit} />
            </div>
            <div className="col-sm-6">
              <WineInfoComponent label="Area" data={`${info.area}, ${info.country}`} />
            </div>
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
