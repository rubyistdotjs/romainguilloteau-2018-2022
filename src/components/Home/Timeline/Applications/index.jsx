import React from 'react';
import PropTypes from 'prop-types';
import { camelCase } from 'lodash';
import Application from './Application';
import ScreenshotList from './ScreenshotList';
import ApplicationsNavigation from './ApplicationsNavigation';

class Applications extends React.PureComponent {
  state = {
    selectedApplicationIndex: 0,
  };

  handleSelectApplication = index => {
    this.setState({ selectedApplicationIndex: index });
  };

  render() {
    const { selectedApplicationIndex } = this.state;
    const { applications } = this.props;

    if (applications.length === 0) return '';

    const selectedApplication = applications[selectedApplicationIndex];

    return (
      <div className="flex flex-col lg:flex-row">
        <div className="block lg:hidden -mt-6 mb-6">
          <ApplicationsNavigation
            selectedApplicationIndex={selectedApplicationIndex}
            applications={applications}
            onChange={this.handleSelectApplication}
          />
        </div>
        <div className="flex flex-row flex-no-wrap lg:w-3/5 lg:mr-4 overflow-x-hidden">
          {applications.map(app => (
            <Application
              key={camelCase(app.name)}
              name={app.name}
              brandColor={app.brandColor}
              description={app.description}
              challenges={app.challenges}
              tags={app.tags}
              offset={selectedApplicationIndex}
            />
          ))}
        </div>
        <div className="hidden flex-col lg:flex w-2/5 pb-4 pl-4">
          <div className="pt-2 pb-8 mx-auto">
            <ApplicationsNavigation
              selectedApplicationIndex={selectedApplicationIndex}
              applications={applications}
              onChange={this.handleSelectApplication}
            />
          </div>
          <ScreenshotList
            appName={selectedApplication.name}
            appUrl={selectedApplication.url}
            screenshots={selectedApplication.screenshots}
          />
        </div>
      </div>
    );
  }
}

Applications.propTypes = {
  applications: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      brandColor: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      challenges: PropTypes.arrayOf(PropTypes.string),
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
