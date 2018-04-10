import React, { Component } from 'react';
import Section from '../Section';
import Hobby from './Hobby';
import HobbyListItem from './HobbyListItem';

import booksJSON from '../../../database/books.json';
import seriesJSON from '../../../database/series.json';
import gamesJSON from '../../../database/games.json';
import roadtripsJSON from '../../../database/roadtrips.json';

export default class Hobbies extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
      series: [],
      games: [],
      roadtrips: [],
    };
  }

  componentDidMount() {
    this.setState((prevState, props) => ({
      books: booksJSON,
      series: seriesJSON,
      games: gamesJSON,
      roadtrips: roadtripsJSON,
    }));
  }

  render() {
    return (
      <Section bgColor="blue-darkest">
        <div className="container py-8 mx-auto align-center">
          <h2 className="font-heading text-5xl text-white pb-8 antialiased font-semibold antialiased">
            Loisirs
          </h2>
        </div>
        <div className="container hobbies mx-auto flex flex-row">
          <Hobby color="teal" listTitle="Derniers livres">
            {this.state.books.map(book => (
              <HobbyListItem
                itemTitle={book.title}
                itemSubtitle={`${book.author} - ${book.category}`}
              />
            ))}
          </Hobby>

          <Hobby color="red" listTitle="Dernieres Séries">
            {this.state.series.map(show => (
              <HobbyListItem itemTitle={show.title} itemSubtitle={show.category} />
            ))}
          </Hobby>

          <Hobby color="indigo" listTitle="Derniers jeux">
            {this.state.games.map(game => (
              <HobbyListItem itemTitle={game.title} itemSubtitle={game.category} />
            ))}
          </Hobby>

          <Hobby color="green" listTitle="Derniers trajet moto">
            {this.state.roadtrips.map(roadtrip => (
              <HobbyListItem
                itemTitle={roadtrip.name}
                itemSubtitle={roadtrip.distance}
              />
            ))}
          </Hobby>
        </div>
      </Section>
    );
  }
}
