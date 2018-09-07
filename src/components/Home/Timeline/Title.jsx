import React from 'react';
import PropTypes from 'prop-types';

export default function Title({
  title,
  fromDate,
  toDate,
  atPlace,
}) {
  const from = new Date(fromDate).getFullYear();
  const to = toDate ? new Date(toDate).getFullYear() : 'présent';

  return (
    <div className="mb-12">
      <h2 className="text-dark text-4xl font-heading font-bold tracking-tight leading-none">
        {title}
      </h2>
      <span className="block text-dark text-3xl font-semibold leading-tight mt-1">
        {'de '}
        <strong>{from}</strong>
        {' à '}
        <strong>{to}</strong>
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
