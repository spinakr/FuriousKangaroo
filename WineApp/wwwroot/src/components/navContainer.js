import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import NavComponent from './navComponent';
import { setNewFilter } from '../modules/winesModule';

class NavContainer extends Component {
  render() {
    return <NavComponent filterChanged={this.props.setNewFilter} location={this.props.location} />;
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setNewFilter: bindActionCreators(setNewFilter, dispatch),
  };
};

NavContainer.propTypes = {
  location: PropTypes.object.isRequired,
  setNewFilter: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(NavContainer);
