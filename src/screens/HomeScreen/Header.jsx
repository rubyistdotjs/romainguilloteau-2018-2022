import React from 'react';
import { FormattedMessage } from 'react-intl';

import AppHeader from '../../components/AppHeader';
import Emoji from '../../components/Emoji';

function Header() {
  return (
    <header>
      <AppHeader />
      <div className="container mb-32">
        <div className="w-full md:w-full lg:w-11/12 xl:w-9/12">
          <h1 className="text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight md:leading-none mt-8 mb-6">
            <Emoji
              alt="👋"
              name="waving-hand"
              className="hidden md:inline-block md:w-10 lg:w-12 mr-1 align-center pb-1 md:pb-2"
            />{' '}
            <FormattedMessage
              id="home.header.name"
              defaultMessage="I'm Romain Guilloteau"
            />
            <br />
            <FormattedMessage
              id="home.header.job"
              defaultMessage="A Senior Full Stack Developer"
            />
          </h1>
          <p className="text-base md:text-xl mt-12 text-gray-700">
            <FormattedMessage
              id="home.header.introduction"
              defaultMessage="Currently working at Lunchr, previously Codeur and 1Year1Book. I have more than 7 years of professional experiences during which I had the opportunity to take on all the roles necessary to launch ambitious applications."
            />
          </p>
          <div className="mt-12">
            <a
              href="mailto:hello@romainguilloteau.dev"
              className="text-base md:text-lg font-medium antialiased text-teal-600 underline hover:text-teal-900"
            >
              hello@romainguilloteau.dev
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
