import React from 'react';
import resume from '../../documents/resume.pdf';

export default function Header() {
  return (
    <header className="flex flex-col items-center h-screen p-8 bg-black">
      <div className="flex flex-col justify-center flex-grow text-center pb-8">
        <h1 className="lg:text-6xl sm:text-5xl text-4xl text-white font-heading font-extrabold leading-normal antialiased">
          Romain Guilloteau
        </h1>
        <p className="text-grey-light lg:text-4xl sm:text-3xl text-2xl font-heading font-semibold leading-tight antialiased mb-4">
          Développeur full stack{' '}
          <span className="text-red-light">Ruby on Rails</span> et{' '}
          <span className="text-yellow">JavaScript</span>
        </p>
        <div className="self-center mt-8">
          <a
            href="#contact-form"
            className="inline-block text-white font-semibold no-underline py-2 px-4 mr-2 bg-indigo border-2 border-transparent rounded hover:bg-indigo-dark"
          >
            Envoyer moi un message
          </a>
          <a
            href={resume}
            className="inline-block text-grey font-semibold no-underline py-2 px-4 border-2 border-grey rounded hover:bg-grey hover:text-black hover:border-transparent"
            download="romain-guilloteau.pdf"
          >
            Télécharger mon CV
          </a>
        </div>
      </div>
      <p className="text-grey text-sm md:text-base lg:text-lg text-md font-medium">
        Site en cours de développement
      </p>
    </header>
  );
}
