import React from 'react';
import PropTypes from 'prop-types';
import Screenshot from './Screenshot';

export default function ApplicationScreenshots({
  appName,
  appUrl,
  screenshots,
}) {
  function lastScreenshot(devise) {
    return screenshots
      .filter(s => s.devise === devise)
      .sort((a, b) => a - b)[0];
  }

  const desktopScreenshot = lastScreenshot('desktop');
  const mobileScreenshot = lastScreenshot('mobile');

  return (
    <div className="relative w-full h-full overflow-hidden">
      {desktopScreenshot && (
        <div className="flex-1 h-full rounded shadow-lg overflow-hidden">
          <div className="bg-grey-light w-full h-6 px-2 flex flex-row items-center shadow z-10">
            <div className="w-2 h-2 bg-red mr-1 rounded-full" />
            <div className="w-2 h-2 bg-orange mr-1 rounded-full" />
            <div className="w-2 h-2 bg-green rounded-full" />
          </div>
          <Screenshot
            filename={desktopScreenshot.filename}
            thumbnail={desktopScreenshot.thumbnail}
            alt={`Capture d'écran du site ${appName}`}
            url={appUrl}
          />
        </div>
      )}
      {mobileScreenshot && (
        <div className="absolute pin-b pin-r mb-6 mr-3 flex flex-col w-24 h-48 lg:w-32 lg:h-64 bg-grey-darkest rounded-lg shadow-lg overflow-hidden z-10">
          <div className="bg-grey-darkest w-full h-3 lg:h-4 flex flex-row justify-center items-center pr-4 shadow z-10">
            <div className="flex items-center justify-center flex-no-shrink w-1 h-1 lg:w-2 lg:h-2 bg-grey-darker mr-4 rounded-full">
              <div className="hidden lg:block w-1 h-1 bg-grey-darkest rounded-full" />
            </div>
            <div className="w-6 lg:w-8 h-1 bg-black rounded-full" />
          </div>
          <div className="relative flex-1 mx-1 overflow-hidden">
            <Screenshot
              filename={mobileScreenshot.filename}
              thumbnail={mobileScreenshot.thumbnail}
              alt={`Capture d'écran sur smartphone du site ${appName}`}
              url={appUrl}
            />
          </div>
          <div className="bg-grey-darkest w-full h-4 lg:h-6 flex flex-row flex-no-shrink justify-center items-center shadow z-10">
            <div className="w-4 h-2 lg:w-6 lg:h-3 bg-grey-darker rounded-full" />
          </div>
        </div>
      )}
    </div>
  );
}

ApplicationScreenshots.propTypes = {
  appName: PropTypes.string.isRequired,
  appUrl: PropTypes.string,
  screenshots: PropTypes.arrayOf(PropTypes.shape({
    devise: PropTypes.oneOf(['desktop', 'mobile']),
    filename: PropTypes.string,
    thumbnail: PropTypes.string,
    takenAt: PropTypes.number,
  })).isRequired,
};

ApplicationScreenshots.defaultProps = {
  appUrl: null,
};
