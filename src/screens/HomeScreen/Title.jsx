import React from 'react';
import PropTypes from 'prop-types';

function Title({ title, fromDate, toDate, atPlace }) {
  const fromYear = new Date(fromDate).getFullYear();
  const toYear = toDate ? new Date(toDate).getFullYear() : null;

  return (
    <div className="mb-8 md:mb-12">
      <h3 className="text-black text-2xl md:text-4xl font-bold leading-none">
        {title}
      </h3>
      <span className="block text-gray-700 text-lg md:text-xl lg:text-2xl font-medium leading-tight mt-1">
        {toYear ? `from ${fromYear} to ${toYear}` : `since ${fromYear}`}
        {atPlace && (
          <span>
            {' - '}
            <strong>{atPlace}</strong>
          </span>
        )}
      </span>
    </div>
  );
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
  fromDate: PropTypes.number.isRequired,
  toDate: PropTypes.number,
  atPlace: PropTypes.string,
};

Title.defaultProps = {
  toDate: null,
  atPlace: null,
};

export default Title;
