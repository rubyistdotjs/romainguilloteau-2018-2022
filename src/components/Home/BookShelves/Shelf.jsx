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

async function fetchBooks(shelfName, setBooks) {
  const { data } = await api.get('/shelfBooks', {
    params: { shelf: shelfName },
  });

  setBooks(data);
}

function Shelf({ intl, name, booksCount }) {
  const { formatMessage } = intl;
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks(name, setBooks);
  }, [name]);

  return (
    <div>
      <h3 className="text-black text-2xl lg:text-2xl font-bold tracking-tight leading-none mb-6 flex flex-row items-center">
        {formatMessage(i18n[camelCase(name)])}
        <span className="inline-block text-grey-darkest text-xs font-semibold leading-none bg-grey-light py-1 px-2 ml-3 rounded-full">
          {booksCount}
        </span>
      </h3>
      {books.map(book => (
        <Book
          key={`book-${book.id}`}
          title={book.title}
          author={book.author}
          url={book.link}
        />
      ))}
    </div>
  );
}

Shelf.propTypes = {
  intl: intlShape.isRequired,
  name: PropTypes.string.isRequired,
  booksCount: PropTypes.number.isRequired,
};

export default injectIntl(Shelf);
