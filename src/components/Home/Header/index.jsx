import React from 'react';
import { FormattedMessage } from 'react-intl';
import Me from './Me';
import ExternalLinkList from './ExternalLinkList';
import resume from '../../../documents/resume.pdf';

function Header() {
  return (
    <header className="bg-white">
      <div className="container flex justify-between align-center mt-8 mb-24">
        <Me />
        <ExternalLinkList />
      </div>
      <div className="container mb-32">
        <div className="w-full lg:w-2/3 xl:w-4/5">
          <h1 className="text-black font-heading sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight mt-8 mb-6">
            <FormattedMessage
              id="home.header.title"
              defaultMessage="Full Stack Web Developer, Ruby on Rails & JavaScript"
            />
            {' '}
            <span className="hidden xl:inline xl:text-4xl align-middle font-normal">
              (React, Vue.js & Node.js)
            </span>
          </h1>
          <p className="text-black text-base md:text-xl font-semibold mb-6">
            <FormattedMessage
              id="home.header.introduction"
              defaultMessage="An obsession in my teenage years, a profession for
                now more than 6 years, during this time I had the opportunity to
                take on all the roles necessary to build and deploy ambitious
                applications (front-end, back-end, SEO, design, server
                architecture, …)."
            />
          </p>
          <div className="mt-12">
            <a
              href={resume}
              className="btn btn-blue"
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
