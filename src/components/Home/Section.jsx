import React from 'react';
import PropTypes from 'prop-types';

function Section({ emoji, title, children }) {
  return (
    <section className="container py-16">
      <h2 className="text-4xl mb-16">
        <span role="img" aria-label={title}>
          {emoji}
        </span>
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
