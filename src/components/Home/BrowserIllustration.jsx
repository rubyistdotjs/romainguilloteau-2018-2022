import React from 'react';

export default function BrowserIllustration({ filename, alt }) {
  if (!filename) return '';

  const screenshots = require.context('../../images/screenshots', false, /\.jpg$/);
  const src = screenshots(`./${filename}-browser.jpg`, true);

  return (
    <div className="flex-1 h-full rounded-sm shadow-lg overflow-hidden">
      <div className="bg-grey-light w-full h-6 px-2 flex flex-row items-center shadow z-10">
        <div className="w-2 h-2 bg-red mr-1 rounded-full" />
        <div className="w-2 h-2 bg-orange mr-1 rounded-full" />
        <div className="w-2 h-2 bg-green rounded-full" />
      </div>
      <div className="relative w-full h-full bg-grey-lighter overflow-hidden">
        <img src={src} alt={alt} className="absolute pin-t browser-scroll" />
      </div>
    </div>
  );
}
