import React from 'react';
import PropTypes from 'prop-types';

const GridComponent = ({ children, columns }) => {
  const chunked = [];
  for (let i = 0; i < children.length; i += columns) {
    chunked.push(children.slice(i, i + columns));
  }

  return (
    <div>
      {chunked.map((chunk, rowIndex) => {
        return (
          <div className="row" key={rowIndex}>
            {chunk.map((child, colIndex) => {
              return (
                <div className={`col-sm-${12 / columns}`} key={colIndex}>
                  {child}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

GridComponent.propTypes = {
  children: PropTypes.array.isRequired,
  columns: PropTypes.string,
};

GridComponent.defaultProps = {
  columns: "3",
};

export default GridComponent;
