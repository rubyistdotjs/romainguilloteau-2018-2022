import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape, defineMessages } from 'react-intl';
import Screenshot from './Screenshot';

const i18n = defineMessages({
  desktopScreenshotAlt: {
    id: 'home.jobs.applications.desktopScreenshotAlt',
    defaultMessage: 'Screenshot of {appName}',
  },
  mobileScreenshotAlt: {
    id: 'home.jobs.applications.mobileScreenshotAlt',
    defaultMessage: 'Mobile screenshot of {appName}',
  },
});

function ScreenshotList({ intl, appName, appUrl, screenshots }) {
  const { formatMessage } = intl;

  function lastScreenshot(devise) {
    return screenshots
      .filter(s => s.devise === devise)
      .sort((a, b) => a - b)[0];
  }

  const desktopScreenshot = lastScreenshot('desktop');
  const mobileScreenshot = lastScreenshot('mobile');

  return (
    <div className="relative flex-1 flex-grow">
      {desktopScreenshot && (
        <div className="flex flex-col w-full h-full">
          <div className="flex flex-row items-center bg-grey-light h-6 px-2">
            <div className="w-2 h-2 bg-red mr-1 rounded-full" />
            <div className="w-2 h-2 bg-orange mr-1 rounded-full" />
            <div className="w-2 h-2 bg-green rounded-full" />
          </div>
          <div className="flex flex-grow border-grey-light border-l-2 border-r-2 border-b-2 overflow-hidden">
            <Screenshot
              filename={desktopScreenshot.filename}
              thumbnail={desktopScreenshot.thumbnail}
              alt={formatMessage(i18n.desktopScreenshotAlt, { appName })}
              url={appUrl}
            />
          </div>
        </div>
      )}
      {mobileScreenshot && (
        <div className="absolute pin-b pin-r flex flex-col w-24 h-48 lg:w-32 lg:h-64 mb-2 mr-2 bg-grey-darkest rounded shadow-lg overflow-hidden z-10">
          <div className="bg-grey-darkest w-full h-3 lg:h-4 flex flex-row justify-center items-center pr-4">
            <div className="flex items-center justify-center flex-no-shrink w-1 h-1 lg:w-2 lg:h-2 bg-grey-darker mr-4 rounded-full">
              <div className="hidden lg:block w-1 h-1 bg-grey-darkest rounded-full" />
            </div>
            <div className="w-6 lg:w-8 h-1 bg-black rounded-full" />
          </div>
          <div className="flex flex-grow px-1 overflow-hidden">
            <Screenshot
              filename={mobileScreenshot.filename}
              thumbnail={mobileScreenshot.thumbnail}
              alt={formatMessage(i18n.mobileScreenshotAlt, { appName })}
              url={appUrl}
            />
          </div>
          <div className="bg-grey-darkest w-full h-4 lg:h-6 flex flex-row flex-no-shrink justify-center items-center">
            <div className="w-4 h-2 lg:w-6 lg:h-3 bg-grey-darker rounded-full" />
          </div>
        </div>
      )}
    </div>
  );
}

ScreenshotList.propTypes = {
  intl: intlShape.isRequired,
  appName: PropTypes.string.isRequired,
  appUrl: PropTypes.string,
  screenshots: PropTypes.arrayOf(
    PropTypes.shape({
      devise: PropTypes.oneOf(['desktop', 'mobile']),
      filename: PropTypes.string,
      thumbnail: PropTypes.string,
      takenAt: PropTypes.number,
    })
  ).isRequired,
};

ScreenshotList.defaultProps = {
  appUrl: null,
};

export default injectIntl(ScreenshotList);
