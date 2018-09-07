import React from 'react';
import PropTypes from 'prop-types';

export default function Tag({ tag }) {
  const small = tag.legacy ? (
    <small className="align-middle leading-none">
      (legacy)
    </small>
  ) : (
    ''
  );

  return (
    <span className="label">
      {tag.name} {small}
    </span>
  );
}

Tag.propTypes = {
  tag: PropTypes.shape({
    name: PropTypes.string.isRequired,
    legacy: PropTypes.bool,
  }).isRequired,
};
