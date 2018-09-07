import React from 'react';
import PropTypes from 'prop-types';
import { camelCase } from 'lodash';
import Application from './Application';
import ScreenshotList from './ScreenshotList';
import Steps from './Steps';

export default class Applications extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      selectedApplicationIndex: 0,
    };

    this.handleSelectApplication = this.handleSelectApplication.bind(this);
  }

  handleSelectApplication(index) {
    this.setState({ selectedApplicationIndex: index });
  }

  render() {
    const { selectedApplicationIndex } = this.state;
    const { applications } = this.props;

    if (applications.length === 0) return '';

    const selectedApplication = applications[selectedApplicationIndex];

    return (
      <div className="flex-1 flex flex-row flex-no-wrap">
        <div className="w-full lg:w-3/5 mr-4 flex flex-row flex-no-wrap overflow-hidden">
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
        <div className="hidden lg:block w-2/5 pb-8 px-4">
          <Steps
            current={selectedApplicationIndex}
            total={applications.length}
            onChange={this.handleSelectApplication}
          />
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
  applications: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    brandColor: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    challenges: PropTypes.arrayOf(PropTypes.string),
    tags: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      legacy: PropTypes.bool,
    })),
  })).isRequired,
};
