import React from 'react';
import PropTypes from 'prop-types';

const FormComponent = ({ addNewWine, updateForm, wineForm }) => {
  return (
    <form>
      <div className="form-group pt-5">
        <h5>Add New Wine </h5>
        <input
          type="number"
          id="vinmonopoletId"
          className="form-control form-control-lg"
          placeholder="Vinmonopolet id"
          onChange={updateForm}
          value={wineForm.vinmonopoletId}
        />
      </div>
      <button type="submit" className="btn btn-primary" onClick={addNewWine}>Save</button>
    </form>
  );
};

FormComponent.propTypes = {
  addNewWine: PropTypes.func.isRequired,
  updateForm: PropTypes.func.isRequired,
  wineForm: PropTypes.object.isRequired,
};

export default FormComponent;
