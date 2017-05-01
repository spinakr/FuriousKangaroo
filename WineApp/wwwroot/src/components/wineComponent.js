import React from 'react';
import PropTypes from 'prop-types';

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
        <h3 className="card-title">{info.name} {wine.ids.length === 1 ? '' : `(${wine.ids.length})`} </h3>

      </div>

      <div className="collapse" id={`infoSection-${info.rowKey}`}>
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="card-block">
                <h6 className="card-subtitle">Producer</h6>
                <p className="card-text">{info.producer}</p>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card-block">
                <h6 className="card-subtitle">Vintage</h6>
                <p className="card-text">{info.vintage}</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <div className="card-block">
                <h6 className="card-subtitle">Fruit</h6>
                <p className="card-text">{info.fruit}</p>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card-block">
                <h6 className="card-subtitle">Area</h6>
                <p className="card-text">{info.area}, {info.country}</p>
              </div>
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
