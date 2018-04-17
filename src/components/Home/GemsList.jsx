import React from 'react';
import { kebabCase } from 'lodash';

export default function GemsList() {
  const items = [
    'Puma',
    'PostgreSQL',
    'Slim',
    'Scss',
    'SimpleForm',
    'Devise',
    'Sidekiq',
    'CanCanCan',
    'Paperclip',
    'Stripe',
    'PayPal REST',
    'MailChimp',
  ];

  return (
    <ul className="text-grey-darker text-base list-reset flex flex-row flex-wrap">
      {items.map(item => (
        <li key={kebabCase(item)} className="w-1/3">
          <span className="block py-2 mx-2 font-semibold border-grey-lighter border-solid border-b">{item}</span>
        </li>
      ))}
    </ul>
  );
};
