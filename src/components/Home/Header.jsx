import React from 'react';

export default function Header() {
  return (
    <header
      className={`
        flex
        flex-col
        items-center
        h-screen
        px-8
        bg-center
        bg-annecy-lake
        bg-cover
        bg-blue-darkest-filter
        overflow-hidden
      `}
    >
      <div className="flex flex-col justify-center flex-grow text-center pb-8">
        <h1
          className={`
            font-heading
            text-white
            font-bold
            tracking-tight
            antialiased
          `}
        >
          Romain Guilloteau
        </h1>
        <p
          className={`
            font-heading
            text-white-dark
            font-bold
            tracking-tight
            antialiased
          `}
        >
          Développeur full stack{' '}
          <span className="text-red-light">Ruby on Rails</span> et{' '}
          <span className="text-yellow-light">JavaScript</span>
        </p>
      </div>
      <p className="font-heading text-grey text-lg font-medium  mb-8">
        Site en cours de développement
      </p>
    </header>
  );
}
