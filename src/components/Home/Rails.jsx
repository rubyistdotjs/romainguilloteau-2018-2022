import React from 'react';
import Section from './Section';

export default function Rails() {
  return (
    <Section bgColor="red-dark">
      <div className="container py-8 mx-auto flex flex-row">
        <div className="w-3/5 mr-4">
          <h2 className="font-heading text-5xl text-white pb-8 antialiased font-bold">
            Ruby on Rails
          </h2>
          <p className="text-white text-lg leading-tight pb-4">
            Développeur Rails professionnel depuis plus de 7 ans, j'utilise au
            quotidien tous les aspects du framework, y compris les plus récents
            : <strong>ActionCable</strong> utilisé pour deux messageries et un
            système de notification, <strong>Webpacker</strong> pour
            l'intégration de Vue.js et <strong>ActiveStorage</strong> pour
            l'enregistrement d'image coté administrateur.
          </p>
        </div>
        <div className="ml-4">
          <h3 className="font-heading text-xl text-white mx-4 pb-4 antialiased font-bold">
            Ecosystème / Gems les plus utilisés
          </h3>
          <div className="flex flex-row justify-between">
            <div>
              <ul className="text-white mx-4 text-base list-reset">
                <li className="py-1">Puma</li>
                <li className="py-1">PostgreSQL</li>
                <li className="py-1">Slim</li>
                <li className="py-1">Scss</li>
                <li className="py-1">SimpleForm</li>
                <li className="py-1">Devise</li>
              </ul>
            </div>
            <div>
              <ul className="text-white mx-4 text-base list-reset">
                <li className="py-1">Sidekiq</li>
                <li className="py-1">CanCanCan</li>
                <li className="py-1">Paperclip</li>
                <li className="py-1">Stripe</li>
                <li className="py-1">PayPal REST API</li>
                <li className="py-1">MailChimp</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
