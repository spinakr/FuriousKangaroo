import 'whatwg-fetch'; // Native fetch polyfill
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import WineListComponent from '../components/wineListComponent';

const WinesInStockContainer = ({ winesInStock }) => {
  return (
    <div>
      <WineListComponent wines={winesInStock} />
    </div>
  );
};

const mapStateToProps = state => ({
  winesInStock: state.winesInStock,
});

WinesInStockContainer.propTypes = {
  winesInStock: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(WinesInStockContainer);

