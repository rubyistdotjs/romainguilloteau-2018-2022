import React from 'react';

import Head from './Head';
import Header from './Header';
import Timeline from './Timeline';
import Contact from './Contact';

function Home() {
  return (
    <div className="Home">
      <Head />
      <Header />
      <Timeline />
      <Contact />
    </div>
  );
}

export default Home;
