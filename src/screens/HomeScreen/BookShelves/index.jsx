import React, { useState, useEffect } from 'react';
import {
  injectIntl,
  intlShape,
  defineMessages,
  FormattedMessage,
} from 'react-intl';

import Section from '../../../components/Section';
import ExternalLink from '../../../components/ExternalLink';
import Shelf from './Shelf';

import api from '../../../services/api';

const i18n = defineMessages({
  title: {
    id: 'home.bookShelves.title',
    defaultMessage: 'Book shelves',
  },
});

async function fetchShelves(setShelves) {
  const shelvesOrd = ['currently-reading', 'to-read', 'read'];
  const { data } = await api.get('/bookShelves');

  const shelves = data
    .filter(shelf => shelvesOrd.includes(shelf.name))
    .map(shelf => ({ books_count: parseInt(shelf.book_count, 10), ...shelf }))
    .sort((a, b) => shelvesOrd.indexOf(a.name) - shelvesOrd.indexOf(b.name));

  setShelves(shelves);
}

function BookShelves({ intl }) {
  const { formatMessage } = intl;
  const [shelves, setShelves] = useState([]);

  useEffect(() => {
    fetchShelves(setShelves);
  }, []);

  return (
    <Section emoji="📖" title={formatMessage(i18n.title)}>
      <div className="flex flex-col lg:flex-row lg:-mx-4">
        {shelves.map(shelf => (
          <div
            key={`shelf-${shelf.name}`}
            className="w-full lg:w-1/3 mb-8 lg:mb-0 lg:px-4"
          >
            <Shelf name={shelf.name} totalBooksCount={shelf.books_count} />
          </div>
        ))}
      </div>
      <div className="text-grey-dark text-xs my-8">
        <FormattedMessage
          id="home.bookShelves.dataFromGoodreadsAPI"
          defaultMessage="Data collected from {goodreadsLink} API"
          values={{
            goodreadsLink: (
              <ExternalLink
                href="https://www.goodreads.com/user/show/87055544-romain-guilloteau"
                className="text-teal-darker no-underline hover:text-teal-darkest focus:text-teal-darkest"
              >
                Goodreads
              </ExternalLink>
            ),
          }}
        />
      </div>
    </Section>
  );
}

BookShelves.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(BookShelves);
