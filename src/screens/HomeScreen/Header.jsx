import React from 'react';
import { FormattedMessage } from 'react-intl';

import AppHeader from '../../components/AppHeader';
import Emoji from '../../components/Emoji';

import resume from '../../documents/resume.pdf';

function Header() {
  return (
    <header>
      <AppHeader />
      <div className="container mb-32">
        <div className="w-full lg:w-full xl:w-3/4">
          <h1 className="text-gray-900 font-heading text-2xl md:text-4xl font-bold tracking-tight leading-tight mt-8 mb-6">
            <Emoji
              alt="👋"
              name="waving-hand"
              className="w-10 mr-1 align-text-top"
            />{' '}
            <FormattedMessage
              id="home.header.title"
              defaultMessage="I'm Romain Guilloteau aka rubyistdotjs a self-taught full stack developer."
            />
          </h1>
          <p className="text-base md:text-xl text-gray-700">
            <FormattedMessage
              id="home.header.introduction"
              defaultMessage="Currently working for Lunchr, previously Codeur and 1Year1Book. I have more than 7 years of professional experiences during which I had the opportunity to take on all the roles necessary to launch ambitious applications, most notably web designer {manArtistEmoji}."
              values={{
                manArtistEmoji: (
                  <Emoji
                    name="man-artist"
                    alt="👨‍🎨"
                    className="w-6 align-text-top"
                  />
                ),
              }}
            />
          </p>
          <div className="mt-12">
            <a href="#contact-form" className="btn btn-teal">
              <FormattedMessage
                id="home.header.getInTouchBtn"
                defaultMessage="Get in touch"
              />
            </a>
            <a
              href={resume}
              className="btn btn-outline-grey"
              download="romain-guilloteau.pdf"
            >
              <FormattedMessage
                id="home.header.downloadResumeBtn"
                defaultMessage="Download my resume"
              />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
