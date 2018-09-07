import React from 'react';
import { Info } from 'react-feather';
import Me from './Me';
import ExternalLinkList from './ExternalLinkList';
import resume from '../../../documents/resume.pdf';

export default function Header() {
  return (
    <React.Fragment>
      <header className="bg-white">
        <div className="container flex flex-col md:flex-row justify-between md:items-center h-screen min-h-content">
          <div className="pr-1 my-auto">
            <Me />
            <h1 className="text-black font-heading text-5xl sm:text-6xl md:text-xxl font-bold tracking-tight antialiased leading-none mt-6 mb-4">
              Développeur
              <span className="block">Full Stack</span>
            </h1>
            <p className="text-grey-darker text-base w-full md:w-4/5 lg:w-2/3 xl:w-3/5 mb-4">
              Développeur passionné depuis l’adolescence, professionnel depuis
              plus de 6 ans, toujours soucieux de livrer un code lisible, stable
              et performant. J’ai eu l’occasion d’endosser tous les rôles
              nécessaires à la création et mise en production d’applications
              ambitieuses : front-end, back-end, SEO, design, architecture
              serveur, …
            </p>
            <p className="text-grey-darker text-base w-full md:w-4/5 lg:w-2/3 xl:w-1/2">
              Aujourd&apos;hui je développe principalement avec
              <strong className="text-red-dark"> Ruby on Rails </strong>
              et
              <strong className="text-yellow-dark"> JavaScript </strong>
              (React, Vue.js et Node.js).
            </p>
            <div className="mt-8">
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
          <div className="py-4 md:py-0 md:pl-1">
            <ExternalLinkList />
          </div>
        </div>
      </header>
      <div className="text-lg text-orange-darkest text-center font-semibold bg-orange-light leading-none py-8 px-8">
        <Info size={22} className="align-text-bottom mr-2" />
        Site en cours de développement
      </div>
    </React.Fragment>
  );
}
