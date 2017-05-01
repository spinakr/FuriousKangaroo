import 'whatwg-fetch'; // Native fetch polyfill
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import WineListComponent from '../components/wineListComponent';

const WineArchiveContainer = ({ wineArchive }) => {
  console.log(wineArchive);
  return (
    <div>
      <WineListComponent wines={wineArchive} />
    </div>
  );
};

const mapStateToProps = state => ({
  wineArchive: state.wineArchive,
});

WineArchiveContainer.propTypes = {
  wineArchive: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(WineArchiveContainer);

