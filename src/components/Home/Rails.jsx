import React from 'react';
import Section from './Section';
import GemsList from './GemsList';

import gemIcon from '../../images/gem-icon.svg';

export default function Rails() {
  return (
    <Section bgColor="grey-lightest">
      <div className="container py-8 mx-auto flex flex-row items-start">
        <div className="w-3/5 mr-4">
          <h2 className="font-heading text-5xl text-black pb-8 antialiased font-semibold">
            Ruby on Rails
          </h2>
          <p className="text-grey-darkest text-lg leading-normal pb-6">
            Développeur Rails professionnel depuis plus de 7 ans, j'utilise au
            quotidien tous les aspects du framework, y compris les plus récents
            : <strong>ActionCable</strong> utilisé pour deux messageries et un
            système de notification, <strong>Webpacker</strong> pour
            l'intégration de Vue.js et <strong>ActiveStorage</strong> pour
            l'enregistrement d'image coté administrateur.
          </p>
          <p className="text-grey-darkest text-base leading-normal pb-6">
            J'ai eu l'occasion de mettre en place divers systèmes de
            monétisation allant d'un simple achat aux paiements récurrents
            (abonnements). Chaque implémentation est accompagnée de nombreux
            outils administateurs : remboursements, statistiques, exports
            comptables, ...
          </p>
          <p className="text-grey-darkest text-base leading-normal pb-6">
            Je suis également familier avec le développement de Gems pour
            applications Rails. J'ai été notamment amené à developper RailsSes
            qui est utilisé sur l'ensemble des sites de Codeur et est
            responsable au total de l'envoi et du log de près de 400 000 emails
            par jour. La gem maintiens un registre de tous les destinataires et
            bloque automatiquement l'envoi d'emails (de manière silencieuse)
            vers des adresses ayant retournées des erreurs ou plaintes pour
            spams lors de précédent envois. Malheureusement celle-ci n'est pas
            open source à l'heure actuelle.
          </p>
        </div>
        <div className="ml-4 w-2/5">
          <div className="p-4 w-full pb-6 mt-2 mb-6 rounded bg-white overflow-hidden shadow">
            <div className="bg-red-dark w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center">
              <img
                src={gemIcon}
                alt="Icon représentant un rubis"
                className="p-2"
              />
            </div>
            <h3 className="font-heading text-base text-red-dark mx-4 text-center uppercase pb-6 font-bold antialiased">
              Ecosystème / Gems les plus utilisées
            </h3>
            <GemsList />
          </div>
          <div className="p-6 rounded bg-white overflow-hidden shadow">
            <span className="text-lg text-red-dark">
              9 applications Rails en production
            </span>, développées seul depuis une page blanche. J'étais
            également responsable des choix technologiques et du design.
          </div>
        </div>
      </div>
    </Section>
  );
}
