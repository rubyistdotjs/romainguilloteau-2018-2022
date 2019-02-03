import React from 'react';
import PropTypes from 'prop-types';

import Emoji from '../Emoji';

function Section({ emoji, title, children }) {
  return (
    <section className="container my-24 md:my-32">
      <h2 className="text-4xl mb-16">
        <Emoji name={title} symbol={emoji} />
      </h2>
      {children}
    </section>
  );
}

Section.propTypes = {
  emoji: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Section;
