import React from 'react';

import Head from './Head';
import Header from './Header';
import Companies from './Companies';
import Rails from './Rails';
import Javascript from './Javascript';
import Environment from './Environment';
import Hobbies from './Hobbies';
import Contact from './Contact';

export default function Home() {
  return (
    <div className="Home">
      <Header />
      <Companies />
      <Rails />
      <Javascript />
      <Environment />
      <Hobbies />
      <Contact />
    </div>
  )
}
