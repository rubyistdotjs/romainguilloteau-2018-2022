import React from 'react';
import { Info } from 'react-feather';
import Me from './Me';
import ExternalLinkList from './ExternalLinkList';
import resume from '../../../documents/resume.pdf';

export default function Header() {
  return (
    <React.Fragment>
      <header className="bg-black flex flex-col sm:flex-row justify-between sm:items-center h-screen min-h-content p-8">
        <div className="pr-1 my-auto">
          <Me />
          <h1 className="text-white font-heading text-5xl sm:text-6xl md:text-xxl font-bold tracking-tight antialiased leading-none mt-6 mb-3">
            Développeur <span className="block">Full Stack</span>
          </h1>
          <span className="text-grey-lighter text-2xl sm:text-3xl md:text-4xl font-semibold antialiased">
            <span className="text-red-light font-bold">Ruby on Rails</span> et <span className="text-yellow font-bold">JavaScript</span>
          </span>
          <div className="mt-8 sm:mt-12">
            <a
              href={resume}
              className="btn btn-blue"
              download="romain-guilloteau.pdf"
            >
              Télécharger mon CV
            </a>
          </div>
        </div>
        <div className="pl-1">
          <ExternalLinkList />
        </div>
      </header>
      <div className="text-lg text-orange-darkest text-center font-semibold bg-orange-light leading-none py-8 px-8">
        <Info size={22} className="align-text-bottom mr-2" />
        Site en cours de développement
      </div>
    </React.Fragment>
  );
}
