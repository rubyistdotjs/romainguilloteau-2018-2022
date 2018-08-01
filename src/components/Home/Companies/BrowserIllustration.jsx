import React from 'react';
import PropTypes from 'prop-types';
import Screenshot from './Screenshot';

export default function BrowserIllustration({ screenshot, screenshotAlt, url }) {
  if (!screenshot) return '';

  return (
    <div className="flex-1 h-full rounded-sm shadow-lg overflow-hidden">
      <div className="bg-grey-light w-full h-6 px-2 flex flex-row items-center shadow z-10">
        <div className="w-2 h-2 bg-red mr-1 rounded-full" />
        <div className="w-2 h-2 bg-orange mr-1 rounded-full" />
        <div className="w-2 h-2 bg-green rounded-full" />
      </div>
      <Screenshot filename={screenshot} alt={screenshotAlt} url={url} />
    </div>
  );
}

BrowserIllustration.propTypes = {
  screenshot: PropTypes.string,
  screenshotAlt: PropTypes.string,
  url: PropTypes.string,
};

BrowserIllustration.defaultProps = {
  screenshot: null,
  screenshotAlt: '',
  url: null,
};
