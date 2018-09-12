import React from 'react';

import Head from './Head';
import Header from './Header';
import Timeline from './Timeline';

export default function Home() {
  return (
    <div className="Home">
      <Head />
      <Header />
      <Timeline />
    </div>
  );
}
