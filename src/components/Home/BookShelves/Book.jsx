import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape, defineMessages } from 'react-intl';

const i18n = defineMessages({
  seeBookOnGoodreads: {
    id: 'home.bookShelves.shelf.seeBookOnGoodreads',
    defaultMessage: 'Check out this book on Goodreads',
  },
});

function Book({ intl, title, author, url }) {
  const { formatMessage } = intl;

  return (
    <div className="flex flex-col items-start pb-4">
      <a
        href={url}
        title={formatMessage(i18n.seeBookOnGoodreads)}
        target="_blank"
        rel="noopener noreferrer"
        className="text-black text-lg font-bold tracking-tight leading-tight no-underline hover:text-blue-dark focus:text-blue-dark"
      >
        {title}
      </a>
      <span className="text-base text-grey-dark">{author}</span>
    </div>
  );
}

Book.propTypes = {
  intl: intlShape.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default injectIntl(Book);
