import React from 'react';
import PropTypes from 'prop-types';
import { ExternalLink } from 'react-feather';
import ProgressiveImage from 'react-progressive-image';

export default function Screenshot({
  filename,
  thumbnail,
  alt,
  url,
}) {
  const screenshots = require.context(
    '../../../../images/screenshots',
    false,
    /\.jpg$/,
  );

  const largeScreenshot = screenshots(`./${filename}`, true);

  return (
    <div className="screenshot relative flex-grow bg-grey-lightest">
      {url && (
        <div className="screenshot-overlay">
          <a href={url} title="Visiter le site" className="text-white hover:text-blue-light" target="_blank" rel="noopener noreferrer nofollow">
            <ExternalLink size={42} />
          </a>
        </div>
      )}
      <ProgressiveImage src={largeScreenshot} placeholder={`data:image/svg+xml;utf8,${thumbnail}`}>
        {src => (
          <img src={src} alt={alt} className="absolute w-full pin-t" />
        )}
      </ProgressiveImage>
    </div>
  );
}

Screenshot.propTypes = {
  filename: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  alt: PropTypes.string,
  url: PropTypes.string,
};

Screenshot.defaultProps = {
  alt: '',
  url: null,
};