import React from 'react';
import PropTypes from 'prop-types';
import { camelCase } from 'lodash';
import { ChevronRight } from 'react-feather';
import Application from './Application';
import ApplicationScreenshots from './ApplicationScreenshots';

export default class Job extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 0,
      steps: this.props.job.applications.length,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => {
      const nextStep = prevState.step + 1;
      return { step: nextStep >= prevState.steps ? 0 : nextStep };
    });
  }

  render() {
    const { job } = this.props;
    const { step } = this.state;
    const startYear = new Date(job.startedAt).getFullYear();
    const endYear = job.endedAt
      ? new Date(job.endedAt).getFullYear()
      : 'présent';

    const { name, url, screenshots, brandColor } = job.applications[step];
    const applications = job.applications.map(app => (
      <Application key={camelCase(app.name)} application={app} step={step} />
    ));

    return (
      <div className="relative p-8">
        <div
          className="hidden md:block absolute pin-r pin-b pin-t w-24 w-2/5 mt-8 transition transition-bg z-0"
          style={{ backgroundColor: brandColor }}
        />

        <div className="w-1/2 mb-6">
          <h2 className="text-dark text-3xl font-heading font-bold leading-none">
            {job.title}
          </h2>
          <span className="block text-grey-darkest text-2xl font-semibold leading-normal mt-2">
            de <strong>{startYear}</strong> à <strong>{endYear}</strong> chez{' '}
            <strong>{job.company}</strong>
          </span>
        </div>

        <div className="relative flex flex-row items-center mx-auto z-10">
          <div className="flex-1 flex flex-row flex-no-wrap overflow-hidden">
            <div className="w-full md:w-1/2 mr-4 flex flex-row flex-no-wrap overflow-hidden">
              {applications}
            </div>
            <div className="hidden md:block w-1/2 pb-8 px-4">
              <ApplicationScreenshots
                appName={name}
                appUrl={url}
                screenshots={screenshots}
              />
            </div>
          </div>
          <button
            type="button"
            className="shadow-md flex flex-no-shrink items-center justify-center w-10 h-10 bg-grey-lighter border-none md:bg-white md:ml-4 rounded opacity-75 md:opacity-50 hover:opacity-100"
            onClick={this.handleClick}
            aria-label="Voir la prochaine application"
          >
            <ChevronRight
              size={38}
              className="block transition transition-color"
              style={{ color: brandColor }}
            />
          </button>
        </div>
      </div>
    );
  }
}

Job.propTypes = {
  job: PropTypes.shape({
    title: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    startedAt: PropTypes.number.isRequired,
    endedAt: PropTypes.number,
    applications: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};
