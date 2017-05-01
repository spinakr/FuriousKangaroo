import React from 'react';
import PropTypes from 'prop-types';

const WineComponent = ({ wine }) => {
  const info = wine.info;
  return (
    <div
      className="card"
      style={{ cursor: 'pointer' }}
      data-toggle="collapse"
      data-target={`#infoSection-${info.rowKey}`}
      aria-expanded="false"
      aria-controls={`infoSection-${info.rowKey}`} key={info.rowKey}
    >
      <div className="card-block">
        <h3 className="card-title">{info.name} {wine.ids.length === 1 ? '' : `(${wine.ids.length})`} </h3>
        <div className="collapse" id={`infoSection-${info.rowKey}`}>
          <div className="card card-block">
            <ul>
              <li>Producer: {info.producer}</li>
              <li>vintage: {info.vintage}</li>
              <li>Area: {info.area}</li>
              <li>Fruit: {info.fruit}</li>
              <li>Fruit: {info.boughtDate}</li>
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
