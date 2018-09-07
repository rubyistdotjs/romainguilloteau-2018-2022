import React from 'react';
import PropTypes from 'prop-types';
import { times } from 'lodash';

export default function Steps({ current, total, onChange }) {
  const list = times(total).map((step) => {
    const klass = step === current ? 'active' : '';

    return (
      <radio
        title={`Voir l'application n°${step}`}
        className={`block w-6 h-6 ml-1 mr-1 step ${klass}`}
        onClick={() => onChange(step)}
      />
    );
  });

  return (
    <div className="flex flex-row pt-3 pb-4 items-center justify-center">
      {list}
    </div>
  );
}

Steps.propTypes = {
  current: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};
