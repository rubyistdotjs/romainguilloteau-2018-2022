import React from 'react';
import PropTypes from 'prop-types';

function Emoji({ name, alt, ...props }) {
  const emojis = require.context('./images/', false, /\.svg$/);
  const emojiSrc = emojis(`./${name}.svg`, true);
  const { className, ...otherProps } = props;

  return (
    <img
      src={emojiSrc}
      alt={alt}
      className={`inline-block ${className}`}
      {...otherProps}
    />
  );
}

Emoji.propTypes = {
  name: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Emoji;
