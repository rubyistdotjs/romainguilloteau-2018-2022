import React from 'react';
import Me from './Me';
import ExternalLinkList from './ExternalLinkList';
import resume from '../../../documents/resume.pdf';

export default function Header() {
  return (
    <header className="bg-white">
      <div className="container flex justify-between align-center mt-8 mb-24">
        <Me />
        <ExternalLinkList />
      </div>
      <div className="container mb-32">
        <div className="w-full lg:w-2/3 xl:w-4/5">
          <h1 className="text-black font-heading sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight mt-8 mb-6">
            Développeur Full Stack Ruby on Rails & JavaScript
            {' '}
            <span className="hidden xl:inline xl:text-4xl align-middle font-normal">
              (React, Vue.js et Node.js)
            </span>
          </h1>
          <p className="text-black text-base md:text-xl font-semibold mb-6">
            Passionné depuis l’adolescence, professionnel depuis plus de 6
            ans, toujours soucieux de livrer un code lisible, stable et
            performant. J’ai eu l’occasion d’endosser tous les rôles
            nécessaires à la création et mise en production d’applications
            ambitieuses : front-end, back-end, SEO, design, architecture
            serveur, …
          </p>
          <div className="mt-12">
            <a href="#contact-form" className="btn btn-blue">
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
      </div>
    </header>
  );
}
