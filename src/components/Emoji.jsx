import React from 'react';
import PropTypes from 'prop-types';

function Emoji({ name, symbol }) {
  return (
    <span role="img" aria-label={name}>
      {symbol}
    </span>
  );
}

Emoji.propTypes = {
  name: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
};

export default Emoji;
