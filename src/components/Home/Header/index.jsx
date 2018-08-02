import React from 'react';
import ExternalLinkList from './ExternalLinkList';
import resume from '../../../documents/resume.pdf';

export default function Header() {
  return (
    <header>
      <div className="flex flex-col items-center h-screen p-8 bg-black">
        <div className="flex flex-col justify-center flex-grow text-center pb-8">
          <h1 className="lg:text-6xl sm:text-5xl text-4xl text-white font-heading font-extrabold leading-normal antialiased">
            Romain Guilloteau
          </h1>
          <p className="text-grey-light lg:text-4xl sm:text-3xl text-2xl font-heading font-semibold leading-tight antialiased mb-4">
            Développeur full stack{' '}
            <span className="text-red-light">Ruby on Rails</span> et{' '}
            <span className="text-yellow">JavaScript</span>
          </p>
          <div className="self-center mt-4 md:mt-6 lg:mt-8">
            <a href="#contact-form" className="btn btn-indigo">
              Envoyer moi un message
            </a>
            <a
              href={resume}
              className="btn btn-outline-grey"
              download="romain-guilloteau.pdf"
            >
              Télécharger mon CV
            </a>
          </div>
        </div>
        <ExternalLinkList />
      </div>
      <div className="bg-grey-darkest p-8">
        <p className="text-grey-light text-sm md:text-base lg:text-lg text-md text-center font-medium">
          Site en cours de développement
        </p>
      </div>
    </header>
  );
}
