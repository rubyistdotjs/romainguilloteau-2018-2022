import React from 'react';

export default function MobileIllustration({ filename, alt }) {
  if (!filename) return '';

  const screenshots = require.context(
    '../../images/screenshots',
    false,
    /\.jpg$/
  );
  const src = screenshots(`./${filename}-mobile.jpg`, true);

  return (
    <div className="absolute pin-b pin-r mb-6 mr-3 flex flex-col w-24 h-48 lg:w-32 lg:h-64 bg-grey-darkest rounded-lg shadow-lg overflow-hidden">
      <div className="bg-grey-darkest w-full h-3 lg:h-4 flex flex-row justify-center items-center pr-4 shadow z-10">
        <div className="flex items-center justify-center flex-no-shrink w-1 h-1 lg:w-2 lg:h-2 bg-grey-darker mr-4 rounded-full">
          <div className="hidden lg:block w-1 h-1 bg-grey-darkest rounded-full" />
        </div>
        <div className="w-6 lg:w-8 h-1 bg-black rounded-full" />
      </div>
      <div className="flex-1 mx-1 overflow-hidden">
        <img src={src} alt={alt} className="browser-scroll" />
      </div>
      <div className="bg-grey-darkest w-full h-4 lg:h-6 flex flex-row flex-no-shrink justify-center items-center shadow z-10">
        <div className="w-4 h-2 lg:w-6 lg:h-3 bg-grey-darker rounded-full" />
      </div>
    </div>
  );
}
