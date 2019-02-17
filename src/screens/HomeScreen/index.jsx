import React from 'react';

import Head from './Head';
import Header from './Header';
import Jobs from './Jobs';
import Diplomas from './Diplomas';
import BookShelves from './BookShelves';
import Contact from './Contact';

function HomeScreen() {
  return (
    <div>
      <Head />
      <Header />
      <Jobs />
      <Diplomas />
      <BookShelves />
      <Contact />
    </div>
  );
}

export default HomeScreen;
