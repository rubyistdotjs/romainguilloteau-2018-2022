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
        <div className="flex flex-row -mx-4">
          {shelves.map(shelf => (
            <div className="w-1/3" key={`shelf-${shelf.name}`}>
              <Shelf
                name={shelf.name}
                booksCount={shelf.books_count}
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
