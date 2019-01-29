import React from 'react';
import {
  injectIntl,
  intlShape,
  defineMessages,
  FormattedMessage,
} from 'react-intl';

import Section from '../Section';
import Shelf from './Shelf';

import api from '../../../services/api';

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

  async fetchShelves() {
    const { data: shelves } = await api.get('/getBookShelves');
    this.setState({ shelves });
  }

  componentDidMount() {
    this.fetchShelves();
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
        <div className="text-grey-dark text-xs my-8">
          <FormattedMessage
            id="home.bookShelves.dataFromGoodreadsAPI"
            defaultMessage="Data collected from {goodreadsLink} API"
            values={{
              goodreadsLink: (
                <a
                  href="https://www.goodreads.com/user/show/87055544-romain-guilloteau"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="text-blue-dark no-underline hover:text-blue-darker focus:text-blue-darker"
                >
                  Goodreads
                </a>
              )
            }}
          />
        </div>
      </Section>
    );
  }
}

BookShelves.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(BookShelves);
