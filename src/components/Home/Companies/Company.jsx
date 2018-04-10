import React from 'react';
import { camelCase } from 'lodash';
import CompanyApplication from './CompanyApplication';

export default function Company({ company }) {
  const applications = company.applications.map(app => (
    <CompanyApplication key={camelCase(app.name)} application={app} />
  ));

  return (
    <div>
      <div className="container flex flex-col mx-auto py-8">
        <div className="flex flex-row pt-8 pb-2">
          <div
            className={`
              w-24
              h-24
              mr-3
              border-4
              border-solid
              border-white 
              rounded-full
              overflow-hidden 
              shadow-md
            `}
          >
            <img
              src={`/images/${company.logo}`}
              alt={`Logo de ${company.name}`}
            />
          </div>
          <div>
            <h3
              className={`
                text-black
                font-heading
                text-4xl
                font-bold
                leading-tight
              `}
            >
              {company.name}
            </h3>
            <span
              className={`
                block
                text-grey-darkest
                text-xl
                font-semibold
                leading-normal
                tracking-tight
              `}
            >
              {company.role}
            </span>
            <span
              className={`
                block
                text-grey-darker
                text-xl
                font-semibold
                leading-tight
              `}
            >
              {company.startYear} - {company.endYear || 'présent'}
            </span>
          </div>
        </div>
      </div>

      <div className="container mx-auto application-cards">{applications}</div>
    </div>
  );
}
