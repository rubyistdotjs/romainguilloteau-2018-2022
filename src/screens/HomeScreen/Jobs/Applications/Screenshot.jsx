import React from 'react';
import PropTypes from 'prop-types';
import { ExternalLink as ExternalLinkIcon } from 'react-feather';
import ProgressiveImage from 'react-progressive-image';
import { useIntl, defineMessages } from 'react-intl';

import ExternalLink from '../../../../components/ExternalLink';

const i18n = defineMessages({
  visit: {
    id: 'home.jobs.applications.visit',
    defaultMessage: 'Go to this website',
  },
  screenshotAlt: {
    id: 'home.jobs.applications.screenshotAlt',
    defaultMessage: 'Screenshot of {appName}',
  },
});

function Screenshot({ appName, filename, thumbnail, url }) {
  const { formatMessage } = useIntl();

  if (navigator.userAgent === 'ReactSnap') return '';

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
            className="text-teal-500 hover:text-teal-800 transition-colors duration-300"
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
        {src => (
          <img
            src={src}
            alt={formatMessage(i18n.screenshotAlt, { appName })}
            className="absolute w-full top"
          />
        )}
      </ProgressiveImage>
    </div>
  );
}

Screenshot.propTypes = {
  appName: PropTypes.string.isRequired,
  filename: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  url: PropTypes.string,
};

Screenshot.defaultProps = {
  url: null,
};

export default Screenshot;
