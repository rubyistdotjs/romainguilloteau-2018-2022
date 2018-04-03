import React from 'react';
import { camelCase } from 'lodash';
import CompanyApplication from './CompanyApplication';

export default props => {
  const { company } = props;
  const applications = company.applications.map(application => (
    <CompanyApplication
      key={camelCase(application.name)}
      application={application}
    />
  ));

  return (
    <div>
      <div className="container py-8 mx-auto flex flex-col">
        <div className="py-8">
          <h3 className="text-3xl text-black">{company.name}</h3>
          <span className="block text-lg text-gray-dark">{company.role}</span>
          <span className="block text-lg text-gray-dark">
            {company.startYear} - {company.endYear || 'présent'}
          </span>
        </div>
      </div>

      <div className="container mx-auto application-cards">
        {applications}
      </div>
    </div>
  );
};
