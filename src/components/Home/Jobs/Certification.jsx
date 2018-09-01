import React from 'react';
import PropTypes from 'prop-types';

export default function Certification({ certification }) {
  const { name, school, startedAt, endedAt } = certification;
  const startYear = new Date(startedAt).getFullYear();
  const endYear = endedAt ? new Date(endedAt).getFullYear() : 'présent';

  return (
    <div className="py-8">
      <h2 className="text-dark text-3xl font-heading font-bold tracking-tight antialiased leading-none">
        {name}
      </h2>
      <span className="block text-grey-darkest text-2xl font-semibold leading-tight mt-2">
        de <strong>{startYear}</strong> à <strong>{endYear}</strong>
        {school && (
          <span>
            {' '}- <strong>{school}</strong>
          </span>
        )}
      </span>
    </div>
  );
}

Certification.propTypes = {
  certification: PropTypes.shape({
    name: PropTypes.string.isRequired,
    school: PropTypes.string,
    startedAt: PropTypes.number.isRequired,
    endedAt: PropTypes.number,
  }).isRequired,
}
