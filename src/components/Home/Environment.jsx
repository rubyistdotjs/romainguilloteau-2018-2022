import React from 'react';
import { chunk } from 'lodash';
import Section from './Section';

import devToolsJSON from '../../database/dev-tools.json';

export default function Environment() {
  const devtools = devToolsJSON;

  const logos = require.context('../../images/dev-tools', false, /\.svg$/)
  const fetchLogo = (name) => logos(name, true);

  return (
    <Section bgColor="grey-lightest">
      <div className="container py-8 mx-auto flex flex-col align-center">
        <h2 className="font-heading text-5xl text-black pb-8 antialiased font-semibold">
          Environnement de développement
        </h2>

        <div className="flex flex-row">
          {chunk(devtools, Math.round(devtools.length * 0.5)).map((tools, index) => (
            <div key={index} className="w-1/2">
              <ul className="list-reset">
                {tools.map(tool => (
                  <li key={tool.id} className="py-3 flex flex-row items-center">
                    <div className="bg-grey w-10 h-10 mr-4 rounded-full flex items-center justify-center">
                      <img
                        src={fetchLogo(`./${tool.logo.filename}`)}
                        alt={tool.logo.alt}
                        className="w-6 h-6" />
                    </div>
                    <div className="text-grey-darkest text-lg text-semibold">
                      <span className="block leading-none">{tool.name}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
