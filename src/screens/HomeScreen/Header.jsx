import React from 'react';
import { FormattedMessage } from 'react-intl';

import AppHeader from '../../components/AppHeader';

import resume from '../../documents/resume.pdf';

function Header() {
  return (
    <header>
      <AppHeader />
      <div className="container mb-32">
        <div className="w-full lg:w-full xl:w-4/5">
          <h1 className="text-black font-heading text-2xl md:text-4xl font-bold tracking-tight leading-tight mt-8 mb-6">
            <FormattedMessage
              id="home.header.title"
              defaultMessage="👋 I'm Romain Guilloteau aka rubyistdotjs a self-taught full stack web developer."
            />
          </h1>
          <p className="text-base md:text-xl text-grey-darkest">
            <FormattedMessage
              id="home.header.introduction"
              defaultMessage="Currently working for Lunchr, previously Codeur and 1Year1Book. I have more than 7 years of professional experience during which I had the opportunity to take all the roles necessary to launch ambitious applications including SEO, web design and server architecture."
            />
          </p>
          <div className="mt-12">
            <a href="#contact-form" className="btn btn-blue">
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
