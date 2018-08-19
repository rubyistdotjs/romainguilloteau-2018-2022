import React from 'react';
import PropTypes from 'prop-types';
import { kebabCase } from 'lodash';
import Tag from './Tag';

export default function JobLight({ job }) {
  const startYear = new Date(job.startedAt).getFullYear();
  const endYear = job.endedAt ? new Date(job.endedAt).getFullYear() : 'présent';
  const tags = job.tags.map(tag => (
    <Tag key={kebabCase(tag.name)} tag={tag} />
  ));

  return (
      <div className="w-full md:w-1/2 p-8">
        <div>
          <h2 className="text-dark text-3xl font-heading font-bold leading-none">
            {job.title}
          </h2>
          <span className="block text-grey-darkest text-2xl font-semibold leading-normal mt-2">
            de <strong>{startYear}</strong> à <strong>{endYear}</strong>
            {job.company && (
              <span>
                {' '}chez <strong>{job.company}</strong>
              </span>
            )}
          </span>
        </div>
        <p className="text-grey-darkest py-2">
          {job.description}
        </p>
        {tags && (
          <div className="mt-4">
            {tags}
          </div>
        )}
      </div>
  );
}

JobLight.propTypes = {
  job: PropTypes.shape({
    title: PropTypes.string.isRequired,
    company: PropTypes.string,
    startedAt: PropTypes.number.isRequired,
    endedAt: PropTypes.number,
  }).isRequired,
};
