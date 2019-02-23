import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape, defineMessages } from 'react-intl';
import camelCase from 'lodash/camelCase';

import Book from './Book';

import api from '../../../services/api';

const i18n = defineMessages({
  currentlyReading: {
    id: 'home.bookShelves.currentlyReading',
    defaultMessage: 'Reading',
  },
  toRead: {
    id: 'home.bookShelves.toRead',
    defaultMessage: 'On deck',
  },
  read: {
    id: 'home.bookShelves.read',
    defaultMessage: 'Read',
  },
});

async function fetchBooks(shelfName, perPage, setBooks) {
  const { data } = await api.get('/shelfBooks', {
    params: { shelf: shelfName, per_page: perPage },
  });

  setBooks(data);
}

function Shelf({ intl, name, displayedBooksCount, totalBooksCount }) {
  const { formatMessage } = intl;
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks(name, displayedBooksCount, setBooks);
  }, [name]);

  return (
    <div>
      <h3 className="text-black text-2xl lg:text-2xl font-bold tracking-tight leading-none mb-8 flex flex-row items-center">
        {formatMessage(i18n[camelCase(name)])}
        <span className="inline-block text-grey-darkest text-xs font-semibold leading-none bg-grey-light py-1 px-2 ml-3 rounded-full">
          {totalBooksCount}
        </span>
      </h3>
      {books.map(book => (
        <Book
          key={`book-${book.id}`}
          title={book.title}
          author={book.author}
          url={book.link}
          coverUrl={book.cover_url}
        />
      ))}
    </div>
  );
}

Shelf.propTypes = {
  intl: intlShape.isRequired,
  name: PropTypes.string.isRequired,
  displayedBooksCount: PropTypes.number,
  totalBooksCount: PropTypes.number.isRequired,
};

Shelf.defaultProps = {
  displayedBooksCount: 6,
};

export default injectIntl(Shelf);