import React from 'react';

import Head from './Head';
import Header from './Header';
import Timeline from './Timeline';
import Contact from './Contact';

export default function Home() {
  return (
    <div className="Home">
      <Head />
      <Header />
      <Timeline />
      <Contact />
    </div>
  );
}
