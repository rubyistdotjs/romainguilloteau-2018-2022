import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape, defineMessages } from 'react-intl';

import ExternalLink from '../../../components/ExternalLink';

const i18n = defineMessages({
  coverOf: {
    id: 'home.bookShelves.shelf.coverOf',
    defaultMessage: 'Cover of the book {title}',
  },
  seeBookOnGoodreads: {
    id: 'home.bookShelves.shelf.seeBookOnGoodreads',
    defaultMessage: 'Check out this book on Goodreads',
  },
});

function Book({ intl, title, author, url, coverUrl }) {
  const { formatMessage } = intl;

  return (
    <div className="flex flex-row mb-5">
      <div className="w-10 h-full mr-3 flex-shrink-0">
        <img
          src={coverUrl}
          alt={formatMessage(i18n.coverOf, { title })}
          className="w-full h-auto rounded-sm shadow"
        />
      </div>
      <div className="flex flex-col items-start">
        <ExternalLink
          href={url}
          title={formatMessage(i18n.seeBookOnGoodreads)}
          rel="nofollow"
          className="text-gray-900 text-lg font-bold tracking-tight leading-tight hover:text-teal-700 focus:text-teal-700 transition-fast transition-color"
        >
          {title}
        </ExternalLink>
        <span className="text-base text-gray-700">{author}</span>
      </div>
    </div>
  );
}

Book.propTypes = {
  intl: intlShape.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  coverUrl: PropTypes.string.isRequired,
};

export default injectIntl(Book);
