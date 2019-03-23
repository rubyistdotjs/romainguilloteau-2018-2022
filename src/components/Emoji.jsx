import React from 'react';
import PropTypes from 'prop-types';

function Emoji({ name, symbol, ...props }) {
  return (
    <span role="img" aria-label={name} {...props}>
      {symbol}
    </span>
  );
}

Emoji.propTypes = {
  name: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
};

export default Emoji;
