import React from 'react';

import Head from './Head';
import Header from './Header';
import Jobs from './Jobs';
import Diplomas from './Diplomas';
import BookShelves from './BookShelves';
import Footer from '../../components/Footer';

function HomeScreen() {
  return (
    <div>
      <Head />
      <Header />
      <Jobs />
      <Diplomas />
      <BookShelves />
      <Footer />
    </div>
  );
}

export default HomeScreen;
