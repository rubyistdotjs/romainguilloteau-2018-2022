import React from 'react'
import { camelCase } from 'lodash';
import CompanyApplicationTag from './CompanyApplicationTag';

export default (props) => {
  const { application } = props;
  const tags = application.tags.map((tag) => 
    <CompanyApplicationTag key={camelCase(tag.name)} tag={tag} />
  );

  return (
    <div className="mb-4 rounded overflow-hidden shadow">
      <div className="flex flex-row px-6 pt-4">
        <div className="w-12 h-12 bg-grey-light overflow-hidden rounded mr-2">
          <img src={`images/${application.logo}`} alt={`Logo de ${application.name}`} className="block" />
        </div>
        <div>
          <h4 className="font-bold text-xl test-black leading-normal">
            {application.name}
          </h4>
          <span className="block text-grey-dark">
            {application.timePeriod}
          </span>
        </div>
      </div>
      <div className="px-6 py-4">
        <p className="text-grey-darkest text-base leading-tight mb-4">
          {application.description}
        </p>
        <p className="text-grey-darkest text-base leading-tight">
          <button type="button" className="block text-sm text-blue">Voir les défis techniques</button>
        </p>
      </div>
      <div className="px-6 mb-2">
        {tags}
      </div>
    </div>
  )
}
