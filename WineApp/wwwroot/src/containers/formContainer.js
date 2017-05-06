import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { updateForm, addNewWine } from '../modules/form';
import FormComponent from '../components/formComponent';

class FormContainer extends Component {
  render() {
    if (!this.props.isPostingWine && this.props.errorMessage === '') {
      return (
        <FormComponent
          updateForm={this.props.updateForm}
          addNewWine={this.props.addNewWine}
          wineForm={this.props.wineForm}
        />
      );
    } else if (this.props.isPostingWine) {
      return (
        <span>Adding new wine... </span>
      );
    }
    return (
      <div className="alert alert-danger" role="alert">
        <strong>Hang on!</strong> Adding new wine failed. ({this.props.errorMessage})
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateForm: bindActionCreators(updateForm, dispatch),
    addNewWine: bindActionCreators(addNewWine, dispatch),
  };
};

const mapStateToProps = state => ({
  wineForm: state.form,
  isPostingWine: state.form.postingWine,
  errorMessage: state.form.errorMessage,
});

FormContainer.propTypes = {
  updateForm: PropTypes.func.isRequired,
  addNewWine: PropTypes.func.isRequired,
  wineForm: PropTypes.object.isRequired,
  isPostingWine: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);
