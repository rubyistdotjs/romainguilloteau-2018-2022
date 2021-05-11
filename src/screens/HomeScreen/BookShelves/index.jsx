import React, { useState, useEffect } from 'react';

import Section from '../../../components/Section';
import ExternalLink from '../../../components/ExternalLink';
import Shelf from './Shelf';

import api from '../../../services/api';

async function fetchShelves(setShelves) {
  const shelvesOrd = ['currently-reading', 'to-read', 'read'];
  const { data } = await api.get('/bookShelves');

  const shelves = data
    .filter((shelf) => shelvesOrd.includes(shelf.name))
    .map((shelf) => ({ books_count: parseInt(shelf.book_count, 10), ...shelf }))
    .sort((a, b) => shelvesOrd.indexOf(a.name) - shelvesOrd.indexOf(b.name));

  setShelves(shelves);
}

function BookShelves() {
  const [shelves, setShelves] = useState([]);

  useEffect(() => {
    if (navigator.userAgent !== 'ReactSnap') {
      fetchShelves(setShelves);
    }
  }, []);

  return (
    <Section emoji="open-book" title="Book shelves">
      <div className="flex flex-col lg:flex-row lg:-mx-4">
        {shelves.map((shelf) => (
          <div
            key={`shelf-${shelf.name}`}
            className="w-full lg:w-1/3 mb-8 lg:mb-0 lg:px-4"
          >
            <Shelf name={shelf.name} totalBooksCount={shelf.books_count} />
          </div>
        ))}
      </div>
      <div className="text-gray-500 text-sm my-8">
        <span>
          Data collected from{' '}
          <ExternalLink
            href="https://www.goodreads.com/user/show/87055544-romain-guilloteau"
            className="text-teal-600 hover:text-teal-800 focus:text-teal-800"
          >
            Goodreads
          </ExternalLink>{' '}
          API
        </span>
      </div>
    </Section>
  );
}

export default BookShelves;
