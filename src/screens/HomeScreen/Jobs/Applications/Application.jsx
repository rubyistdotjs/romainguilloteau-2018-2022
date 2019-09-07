import React from 'react';
import PropTypes from 'prop-types';
import camelCase from 'lodash/camelCase';
import ChallengeList from './ChallengeList';
import Tag from './Tag';

function Application({ name, description, challenges, tags, offset }) {
  return (
    <div
      className="w-full flex-shrink-0 flex flex-col transition transition-transform"
      style={{ transform: `translateX(-${offset * 100}%)` }}
    >
      <h4 className="text-white text-lg lg:text-2xl font-bold leading-tight mb-3">
        {name}
      </h4>
      {description &&
        description.split('\n').map((p, i) => (
          <p
            key={`description-${i}`}
            className="text-gray-200 font-medium py-2"
          >
            {p}
          </p>
        ))}
      <ChallengeList challenges={challenges} />
      <div className="mt-4">
        {tags.map(tag => (
          <Tag key={camelCase(tag.name)} tag={tag} />
        ))}
      </div>
    </div>
  );
}

Application.propTypes = {
  offset: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  challenges: PropTypes.arrayOf(PropTypes.string),
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      legacy: PropTypes.bool,
    })
  ).isRequired,
};

Application.defaultProps = {
  challenges: [],
};

export default Application;
