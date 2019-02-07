import React from 'react';
import PropTypes from 'prop-types';
import { ExternalLink as ExternalLinkIcon } from 'react-feather';
import ProgressiveImage from 'react-progressive-image';
import { injectIntl, intlShape, defineMessages } from 'react-intl';

import ExternalLink from '../../../ExternalLink';

const i18n = defineMessages({
  visit: {
    id: 'home.jobs.applications.visit',
    defaultMessage: 'Go to this website',
  },
});

function Screenshot({ intl, filename, thumbnail, alt, url }) {
  const { formatMessage } = intl;

  const screenshots = require.context(
    '../../../../images/screenshots',
    false,
    /\.jpg$/
  );

  const largeScreenshot = screenshots(`./${filename}`, true);

  return (
    <div className="screenshot relative flex-grow bg-grey-lightest">
      {url && (
        <div className="screenshot-overlay">
          <ExternalLink
            href={url}
            title={formatMessage(i18n.visit)}
            className="text-white hover:text-blue-light"
            rel="nofollow"
          >
            <ExternalLinkIcon size={42} />
          </ExternalLink>
        </div>
      )}
      <ProgressiveImage
        src={largeScreenshot}
        placeholder={`data:image/svg+xml;utf8,${thumbnail}`}
      >
        {src => <img src={src} alt={alt} className="absolute w-full pin-t" />}
      </ProgressiveImage>
    </div>
  );
}

Screenshot.propTypes = {
  intl: intlShape.isRequired,
  filename: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  alt: PropTypes.string,
  url: PropTypes.string,
};

Screenshot.defaultProps = {
  alt: '',
  url: null,
};

export default injectIntl(Screenshot);
