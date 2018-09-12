import React from 'react';
import PropTypes from 'prop-types';
import { camelCase } from 'lodash';

export default function ApplicationsNavigation({
  selectedApplicationIndex,
  applications,
  onChange,
}) {
  const list = applications.map((application, index) => {
    const { name, brandColor } = application;
    const selected = index === selectedApplicationIndex;
    const klass = selected ? 'active' : '';
    const style = selected && brandColor
      ? { backgroundColor: brandColor, borderColor: brandColor }
      : {};

    return (
      <button
        key={camelCase(name)}
        type="button"
        title={`Voir ${name}`}
        className={`step ${klass}`}
        style={style}
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
      brandColor: PropTypes.string,
    })
  ).isRequired,
  onChange: PropTypes.func.isRequired,
};
