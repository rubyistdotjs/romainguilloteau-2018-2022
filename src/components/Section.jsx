import React from 'react';
import PropTypes from 'prop-types';

import Emoji from './Emoji';

function Section({ emoji, title, children }) {
  return (
    <section className="container my-24 md:my-32">
      <h2 className="text-4xl mb-16">
        {emoji ? <Emoji name={title} symbol={emoji} /> : title}
      </h2>
      {children}
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  emoji: PropTypes.string,
  children: PropTypes.node,
};

Section.defaultProps = {
  emoji: null,
};

export default Section;
