import React, { Component } from 'react';
import { ExternalLink } from 'react-feather';
import { chunk } from 'lodash';
import Section from '../Section';

import booksJSON from '../../../database/books.json';

export default class Hobbies extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
    };
  }

  componentDidMount() {
    this.setState({
      books: booksJSON,
    });
  }

  render() {
    const covers = require.context('../../../images/books', false, /\.jpg$/);
    const cover = filename => covers(`./${filename}.jpg`, true);
    const shelfs = chunk(this.state.books, 3);

    return (
      <Section bgColor="black">
        <div className="container mx-auto pb-8">
          <h2 className="font-heading text-4xl lg:text-5xl text-black antialiased font-extrabold">
            Loisirs
          </h2>
        </div>
        <div className="container flex mx-auto">
          <div className="w-1/2">
            <h3 className="text-black text-3xl font-heading font-extrabold leading-none antialiased">
              Derniers livres
            </h3>
          </div>
          <div className="w-1/2">
            <div className="flex media-cols">
              {shelfs.map(books => (
                <div className="flex flex-col items-center w-1/3 border-r border-grey-darkest">
                  {books.map(book => (
                    <div className="mb-12 px-4 overflow-hidden">
                      <img
                        src={cover(book.cover.filename)}
                        alt={`Couverture du livre ${book.title}`}
                        className="rounded shadow-md"
                      />
                    </div>
                  ))}
                </div>
              ))

              }
            </div>
          </div>
        </div>
      </Section>
    );
  }
}
