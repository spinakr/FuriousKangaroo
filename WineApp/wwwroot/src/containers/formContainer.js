import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { updateForm, addNewWine } from '../modules/form';
import FormComponent from '../components/formComponent';

class FormContainer extends Component {
  render() {
    if (!this.props.isPostingWine && this.props.errorMessage === '' && this.props.newWineAddedName === '') {
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
    } else if (this.props.newWineAddedName !== '') {
      return (
        <div className="alert alert-info  mt-5" role="alert">
          <strong>{this.props.newWineAddedName}</strong> was added!
        </div>
      );
    }
    return (
      <div className="alert alert-danger mt-5" role="alert">
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
  newWineAddedName: state.form.newWineAddedName,
});

FormContainer.propTypes = {
  updateForm: PropTypes.func.isRequired,
  addNewWine: PropTypes.func.isRequired,
  wineForm: PropTypes.object.isRequired,
  isPostingWine: PropTypes.bool.isRequired,
  newWineAddedName: PropTypes.string.isRequired,
  errorMessage: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);
