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
    <div className="flex flex-row mb-4">
      <div className="w-10 h-full mr-2 flex-no-shrink">
        <img
          src={coverUrl}
          alt={formatMessage(i18n.coverOf, { title })}
          className="block w-full h-auto"
        />
      </div>
      <div className="flex flex-col items-start">
        <ExternalLink
          href={url}
          title={formatMessage(i18n.seeBookOnGoodreads)}
          rel="nofollow"
          className="text-black text-lg font-bold tracking-tight leading-tight no-underline hover:text-blue-dark focus:text-blue-dark"
        >
          {title}
        </ExternalLink>
        <span className="text-base text-grey-darker">{author}</span>
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
