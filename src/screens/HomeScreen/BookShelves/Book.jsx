import React from 'react';
import PropTypes from 'prop-types';
import { useIntl, defineMessages } from 'react-intl';

import ExternalLink from '../../../components/ExternalLink';

const i18n = defineMessages({
  coverOf: {
    id: 'home.bookShelves.shelf.coverOf',
    defaultMessage: 'Cover of the book {title}',
  },
  seeBookOnGoodreads: {
    id: 'home.bookShelves.shelf.seeBookOnGoodreads',
    defaultMessage: 'Check out "{title}" on Goodreads',
  },
});

function Book({ title, author, url, coverUrl }) {
  const { formatMessage } = useIntl();

  return (
    <div className="flex flex-row mb-5">
      <div className="w-10 h-full mr-3 flex-shrink-0">
        <img
          src={coverUrl}
          alt={formatMessage(i18n.coverOf, { title })}
          className="w-full h-auto rounded-sm"
        />
      </div>
      <div className="flex flex-col items-start -mt-1 overflow-x-hidden">
        <ExternalLink
          href={url}
          title={formatMessage(i18n.seeBookOnGoodreads, { title })}
          rel="nofollow"
          className="w-full text-gray-900 text-lg font-semibold leading-tight hover:text-teal-500 focus:text-teal-500 truncate transition-fast transition-color"
        >
          {title}
        </ExternalLink>
        <span className="text-base text-gray-700">{author}</span>
      </div>
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  coverUrl: PropTypes.string.isRequired,
};

export default Book;
