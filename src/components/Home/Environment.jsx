import React from 'react';
import Section from './Section';

export default function Environment() {
  return (
    <Section bgColor="indigo-dark">
      <div className="container py-8 mx-auto flex flex-col align-center">
        <h2 className="text-5xl text-white pb-8 antialiased font-semibold antialiased">
          Environnement de dev. / outils
        </h2>

        <div className="flex flex-row">
          <div className="w-1/2">
            <ul className="list-reset">
              <li className="py-2 flex flex-row items-center">
                <div className="bg-indigo-light w-10 h-10 mr-4 rounded-full">
                </div>
                <div className="text-white text-lg text-semibold">
                  <span className="block leading-none">MacBook Pro (High Sierra)</span>
                </div>
              </li>
              <li className="py-2 flex flex-row items-center">
                <div className="bg-indigo-light w-10 h-10 mr-4 rounded-full">
                </div>
                <div className="text-white text-lg text-semibold">
                  <span className="block leading-none">Visual Studio Code</span>
                </div>
              </li>
              <li className="py-2 flex flex-row items-center">
                <div className="bg-indigo-light w-10 h-10 mr-4 rounded-full">
                </div>
                <div className="text-white text-lg text-semibold">
                  <span className="block leading-none">Chrome et Firefox</span>
                </div>
              </li>
              <li className="py-2 flex flex-row items-center">
                <div className="bg-indigo-light w-10 h-10 mr-4 rounded-full">
                </div>
                <div className="text-white text-lg text-semibold">
                  <span className="block leading-none">Sketch</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="w-1/2">
            <ul className="list-reset">
              <li className="py-2 flex flex-row items-center">
                <div className="bg-indigo-light w-10 h-10 mr-4 rounded-full">
                </div>
                <div className="text-white text-lg text-semibold">
                  <span className="block leading-none">Homebrew</span>
                </div>
              </li>
              <li className="py-2 flex flex-row items-center">
                <div className="bg-indigo-light w-10 h-10 mr-4 rounded-full">
                </div>
                <div className="text-white text-lg text-semibold">
                  <span className="block leading-none">chruby</span>
                </div>
              </li>
              <li className="py-2 flex flex-row items-center">
                <div className="bg-indigo-light w-10 h-10 mr-4 rounded-full">
                </div>
                <div className="text-white text-lg text-semibold">
                  <span className="block leading-none">Git (Github / Gitlab)</span>
                </div>
              </li>

            </ul>
          </div>
        </div>
      </div>
    </Section>
  )
}
