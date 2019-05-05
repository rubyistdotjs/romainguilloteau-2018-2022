import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { defineMessages, injectIntl, FormattedMessage } from 'react-intl';

import AppHeader from '../../components/AppHeader';
import Emoji from '../../components/Emoji';

const i18n = defineMessages({
  metaTitle: {
    id: 'NotFoundScreen.metaTitle',
    defaultMessage: 'Page not found',
  },
  metaDescription: {
    id: 'NotFoundScreen.metaDescription',
    defaultMessage: "404 - The page you're looking for does not exist.",
  },
});

function NotFoundScreen({ intl }) {
  const { formatMessage, locale } = intl;

  return (
    <div>
      <Helmet>
        <title>{formatMessage(i18n.metaTitle)}</title>
        <meta
          name="description"
          content={formatMessage(i18n.metaDescription)}
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
            <h1 className="text-black font-heading text-3xl md:text-5xl font-bold tracking-tight leading-tight mt-4 mb-10 mb-16 lg:mb-20">
              <FormattedMessage
                id="NotFoundScreen.title"
                defaultMessage="The page you're looking for does not exist."
              />
            </h1>
            <Link to={`/${locale}/`} className="btn btn-teal">
              <FormattedMessage
                id="NotFoundScreen.backToHome"
                defaultMessage="Go to the home page"
              />
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}

export default injectIntl(NotFoundScreen);
