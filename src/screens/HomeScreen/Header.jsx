import React from 'react';
import { FormattedMessage } from 'react-intl';

import AppHeader from '../../components/AppHeader';
import Emoji from '../../components/Emoji';

function Header() {
  return (
    <header>
      <AppHeader />
      <div className="container mb-32">
        <div className="w-full lg:w-full xl:w-3/4">
          <h1 className="text-white font-heading text-2xl md:text-6xl font-extrabold leading-tight mt-8 mb-6">
            <Emoji
              alt="👋"
              name="waving-hand"
              className="w-12 mr-1 align-center pb-2"
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
          <p className="text-base md:text-xl text-gray-300">
            <FormattedMessage
              id="home.header.introduction"
              defaultMessage="Currently working at Lunchr, previously Codeur and 1Year1Book. I have more than 7 years of professional experiences during which I had the opportunity to take on all the roles necessary to launch ambitious applications."
            />
          </p>
          <div className="mt-16">
            <a
              href="mailto:hello@romainguilloteau.dev"
              className="text-lg text-teal-400 underline hover:text-teal-300"
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
