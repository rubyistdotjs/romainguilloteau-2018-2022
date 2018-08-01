import React from 'react';
import PropTypes from 'prop-types';
import { ExternalLink } from 'react-feather';
import ProgressiveImage from 'react-progressive-image';

export default function Screenshot({ filename, alt, url }) {
  const screenshots = require.context('../../../images/screenshots', false, /\.jpg$/);
  const largeScreenshot = screenshots(`./${filename}.jpg`, true);
  const placeholderScreenshot = screenshots(`./${filename}-placeholder.jpg`, true);

  return (
    <div className="screenshot relative w-full h-full bg-grey-lighter overflow-hidden">
      {url && (
        <div className="screenshot-overlay">
          <a href={url} className="text-white hover:text-blue-light" target="_blank" rel="noopener noreferrer nofollow">
            <ExternalLink size={42} />
          </a>
        </div>
      )}
      <ProgressiveImage src={largeScreenshot} placeholder={placeholderScreenshot}>
        {src => (
          <img src={src} alt={alt} className="absolute w-full pin-t" />
        )}
      </ProgressiveImage>
    </div>
  );
}

Screenshot.propTypes = {
  filename: PropTypes.string.isRequired,
  alt: PropTypes.string,
  url: PropTypes.string,
};

Screenshot.defaultProps = {
  alt: '',
  url: null,
};
