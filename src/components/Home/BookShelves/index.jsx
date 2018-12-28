import React from 'react';
import { injectIntl, intlShape, defineMessages } from 'react-intl';

import Section from '../Section';
import Shelf from './Shelf';

import shelvesJSON from '../../../database/shelves.json';

const i18n = defineMessages({
  title: {
    id: 'home.bookShelves.title',
    defaultMessage: 'Book shelves',
  },
});

class BookShelves extends React.PureComponent {
  state = {
    shelves: [],
    loading: false,
  };

  componentDidMount() {
    this.setState({
      shelves: shelvesJSON,
    });
  }

  render() {
    const { shelves } = this.state;
    const { formatMessage } = this.props.intl;

    return (
      <Section emoji="📖" title={formatMessage(i18n.title)}>
        <div className="flex flex-col lg:flex-row lg:-mx-4">
          {shelves.map(shelf => (
            <div
              key={`shelf-${shelf.name}`}
              className="w-full lg:w-1/3 mb-8 lg:mb-0 lg:px-4"
            >
              <Shelf
                name={shelf.name}
                booksCount={parseInt(shelf.books_count, 10)}
                books={shelf.books}
              />
            </div>
          ))}
        </div>
      </Section>
    );
  }
}

BookShelves.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(BookShelves);
