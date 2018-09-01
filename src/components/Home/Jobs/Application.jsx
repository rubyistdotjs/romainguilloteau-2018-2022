import React from 'react';
import PropTypes from 'prop-types';
import { kebabCase } from 'lodash';
import Tag from './Tag';
import ApplicationChallenges from './ApplicationChallenges';

export default function Application({ application, offset }) {
  const tags = application.tags.map(tag => (
    <Tag key={kebabCase(tag.name)} tag={tag} />
  ));

  return (
    <div
      className="w-full flex-no-shrink flex flex-col transition transition-transform"
      style={{ transform: `translateX(-${offset * 100}%)` }}
    >
      <h4
        className="text-2xl font-heading font-bold leading-tight mb-1"
        style={{ color: application.brandColor }}
      >
        {application.name}
      </h4>
      <p className="text-grey-darkest py-2">
        {application.description}
      </p>
      <ApplicationChallenges challenges={application.challenges} />
      <div className="mt-4">
        {tags}
      </div>
    </div>
  );
}

Application.propTypes = {
  offset: PropTypes.number.isRequired,
  application: PropTypes.shape({
    brandColor: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    challenges: PropTypes.array,
    tags: PropTypes.array,
  }).isRequired,
};
