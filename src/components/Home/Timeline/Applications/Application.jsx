import React from 'react';
import PropTypes from 'prop-types';
import { camelCase } from 'lodash';
import ChallengeList from './ChallengeList';
import Tag from './Tag';

function Application({
  name,
  brandColor,
  description,
  challenges,
  tags,
  offset,
}) {
  return (
    <div
      className="w-full flex-no-shrink flex flex-col transition transition-transform"
      style={{ transform: `translateX(-${offset * 100}%)` }}
    >
      <h4 className="text-black text-xl md:text-2xl font-heading font-bold leading-tight mb-1">
        {name}
      </h4>
      <div
        style={{ backgroundColor: brandColor }}
        className="hidden lg:block w-16 h-1 my-2"
      />
      <p className="text-black font-semibold py-2">{description}</p>
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
  brandColor: PropTypes.string.isRequired,
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
