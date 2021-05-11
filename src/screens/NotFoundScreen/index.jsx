import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import AppHeader from '../../components/AppHeader';
import Emoji from '../../components/Emoji';

function NotFoundScreen() {
  return (
    <div>
      <Helmet>
        <title>Page not found</title>
        <meta
          name="description"
          content="404 - The page you're looking for does not exist."
        />
        <meta name="robots" content="none" />
      </Helmet>
      <header>
        <AppHeader />
        <div className="container mb-32">
          <div className="w-full lg:w-4/5 xl:w-3/5">
            <Emoji
              name="face-with-raised-eyebrow"
              alt="🤨"
              className="text-2xl md:text-3xl"
            />
            <h1 className="text-black text-3xl md:text-5xl font-bold leading-tight mt-4 mb-10 mb-16 lg:mb-20">
              The page you're looking for does not exist.
            </h1>
            <Link to="/" className="btn btn-teal">
              Go to the home page
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}

export default NotFoundScreen;
