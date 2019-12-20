import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
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

function Shelf({ name, displayedBooksCount, totalBooksCount }) {
  const { formatMessage } = useIntl();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks(name, displayedBooksCount, setBooks);
  }, [name, displayedBooksCount]);

  return (
    <div>
      <h3 className="text-gray-900 text-2xl lg:text-2xl font-bold leading-none mb-8 flex flex-row items-center">
        {formatMessage(i18n[camelCase(name)])}
        <span className="inline-block text-gray-800 text-sm font-semibold leading-none bg-gray-300 py-1 px-2 ml-3 rounded-full">
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
  name: PropTypes.string.isRequired,
  displayedBooksCount: PropTypes.number,
  totalBooksCount: PropTypes.number.isRequired,
};

Shelf.defaultProps = {
  displayedBooksCount: 6,
};

export default Shelf;
