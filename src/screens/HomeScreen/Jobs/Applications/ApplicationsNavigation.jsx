import React from 'react';
import PropTypes from 'prop-types';
import camelCase from 'lodash/camelCase';

function ApplicationsNavigation({
  selectedApplicationIndex,
  applications,
  onChange,
}) {
  const list = applications.map((application, index) => {
    const { name } = application;
    const selected = index === selectedApplicationIndex;
    const activeClassName = selected ? 'active' : '';

    return (
      <button
        key={camelCase(name)}
        type="button"
        title={`Switch to ${name}`}
        className={`step ${activeClassName}`}
        onClick={() => onChange(index)}
      />
    );
  });

  return <div className="flex flex-row">{list}</div>;
}

ApplicationsNavigation.propTypes = {
  selectedApplicationIndex: PropTypes.number.isRequired,
  applications: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ApplicationsNavigation;
