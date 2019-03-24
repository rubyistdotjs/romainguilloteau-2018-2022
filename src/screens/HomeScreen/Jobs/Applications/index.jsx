import React, { useState } from 'react';
import PropTypes from 'prop-types';
import camelCase from 'lodash/camelCase';

import Application from './Application';
import Screenshot from './Screenshot';
import ApplicationsNavigation from './ApplicationsNavigation';

function Applications({ applications }) {
  const [selectedAppIndex, setSelectedAppIndex] = useState(0);

  if (applications.length === 0) return '';

  const selectedApp = applications[selectedAppIndex];

  return (
    <div className="flex flex-col lg:flex-row">
      <div className="lg:hidden -mt-3 md:-mt-6 mb-6">
        <ApplicationsNavigation
          selectedApplicationIndex={selectedAppIndex}
          applications={applications}
          onChange={index => setSelectedAppIndex(index)}
        />
      </div>
      <div className="flex flex-row flex-no-wrap lg:w-3/5 lg:mr-4 overflow-x-hidden">
        {applications.map(app => (
          <Application
            key={camelCase(app.name)}
            name={app.name}
            description={app.description}
            challenges={app.challenges}
            tags={app.tags}
            offset={selectedAppIndex}
          />
        ))}
      </div>
      <div className="hidden flex-col lg:flex w-2/5 pb-4 pl-4">
        <div className="pt-2 pb-8 mx-auto">
          <ApplicationsNavigation
            selectedApplicationIndex={selectedAppIndex}
            applications={applications}
            onChange={index => setSelectedAppIndex(index)}
          />
        </div>
        <div className="relative flex-1 flex-grow">
          {selectedApp.screenshot && (
            <div className="flex flex-grow w-full h-full rounded-lg shadow-lg overflow-hidden">
              <Screenshot
                appName={selectedApp.name}
                filename={selectedApp.screenshot.filename}
                thumbnail={selectedApp.screenshot.thumbnail}
                url={selectedApp.url}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

Applications.propTypes = {
  applications: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string,
      description: PropTypes.string.isRequired,
      challenges: PropTypes.arrayOf(PropTypes.string),
      screenshot: PropTypes.shape({
        filename: PropTypes.string,
        thumbnail: PropTypes.string,
        takenAt: PropTypes.number,
      }),
      tags: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          legacy: PropTypes.bool,
        })
      ),
    })
  ).isRequired,
};

export default Applications;
