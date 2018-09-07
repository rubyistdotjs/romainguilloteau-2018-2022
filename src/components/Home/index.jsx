import React from 'react';

import Head from './Head';
import Header from './Header';
import Jobs from './Jobs';
import Contact from './Contact';

export default function Home() {
  return (
    <div className="Home">
      <Head />
      <Header />
      <Jobs />
      <Contact />
    </div>
  );
}
