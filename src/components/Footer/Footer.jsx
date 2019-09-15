import React from 'react';
import { FormattedMessage } from 'react-intl';

function Footer() {
  return (
    <div className="bg-black py-8">
      <div className="container">
        <p className="text-gray-600 text-sm">
          <FormattedMessage
            id="Footer.madeWith"
            defaultMessage="Made with React & Tailwind CSS, hosted on Netlify."
          />
          <br />
          <FormattedMessage
            id="Footer.noDataCollection"
            defaultMessage="This website doesn't collect any data whatsoever."
          />
        </p>
      </div>
    </div>
  );
}

export default Footer;
