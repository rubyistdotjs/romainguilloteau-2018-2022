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
    const { job, bgColor } = this.props;
    const { step } = this.state;
    const startYear = new Date(job.startedAt).getFullYear();
    const endYear = job.endedAt ? new Date(job.endedAt).getFullYear() : 'présent';

    const { name, url, screenshots, brandColor } = job.applications[step];
    const applications = job.applications.map(app => (
      <Application
        key={camelCase(app.name)}
        application={app}
        step={step}
      />
    ));


    return (
      <div className={`relative bg-${bgColor} py-8 pl-8`}>
        <div
          className="hidden md:block absolute pin-r pin-b pin-t w-24 w-2/5 mt-8 transition transition-bg z-0"
          style={{ backgroundColor: brandColor }}
        />

        <div className="relative container flex flex-col mx-auto mb-6 z-10">
          <h3 className="text-black text-3xl font-heading font-extrabold leading-none antialiased">
            {job.title}
          </h3>
          <span className="block text-black text-2xl font-heading font-bold leading-normal antialiased">
            {job.company}
          </span>
          <span className="block text-grey-darker text-xl font-heading font-semibold leading-tight">
            {startYear} - {endYear}
          </span>
        </div>

        <div className="relative container flex flex-row items-center mx-auto z-10">
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
  bgColor: PropTypes.string.isRequired,
  job: PropTypes.shape({
    name: PropTypes.string,
    role: PropTypes.string,
    startYear: PropTypes.string,
    endYear: PropTypes.string,
    applications: PropTypes.array,
  }).isRequired,
};
