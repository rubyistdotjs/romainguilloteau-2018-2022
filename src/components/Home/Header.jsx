import React from 'react';

export default function Header() {
  return (
    <header className="flex flex-col items-center h-screen p-8 bg-black">
      <div className="flex flex-col justify-center flex-grow text-center pb-8">
        <h1 className="lg:text-6xl sm:text-5xl text-4xl text-white font-heading font-bold leading-normal antialiased">
          Romain Guilloteau
        </h1>
        <p className="text-grey-light lg:text-4xl sm:text-3xl text-2xl font-heading leading-tight antialiased">
          Développeur full stack{' '}
          <span className="text-red-light">Ruby on Rails</span> et{' '}
          <span className="text-yellow">JavaScript</span>
        </p>
      </div>
      <p className="text-grey text-sm md:text-base lg:text-lg text-md font-medium">
        Site en cours de développement
      </p>
    </header>
  );
}
