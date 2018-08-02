import React from 'react';
import PropTypes from 'prop-types';
import { camelCase } from 'lodash';
import { ChevronRight } from 'react-feather';
import BrowserIllustration from './BrowserIllustration';
import MobileIllustration from './MobileIllustration';
import CompanyApplication from './CompanyApplication';

export default class Company extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 0,
      steps: this.props.company.applications.length,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  currentApplication() {
    return this.props.company.applications[this.state.step];
  }

  brandColor() {
    return this.currentApplication().brandColor;
  }

  handleClick() {
    this.setState((prevState) => {
      const nextStep = prevState.step + 1;
      return { step: nextStep >= prevState.steps ? 0 : nextStep };
    });
  }

  render() {
    const { company, bgColor } = this.props;
    const { step } = this.state;
    const applications = company.applications.map(app => (
      <CompanyApplication
        key={camelCase(app.name)}
        application={app}
        step={step}
      />
    ));

    return (
      <div className={`relative bg-${bgColor} py-8 pl-8`}>
        <div
          className="hidden md:block absolute pin-r pin-b pin-t w-24 w-2/5 mt-8 transition transition-bg z-0"
          style={{ backgroundColor: this.brandColor() }}
        />

        <div className="relative container flex flex-col mx-auto mb-6 z-10">
          <h3 className="text-black text-3xl font-heading font-extrabold leading-none antialiased">
            {company.name}
          </h3>
          <span className="block text-black text-2xl font-heading font-bold leading-normal antialiased">
            {company.role}
          </span>
          <span className="block text-grey-darker text-xl font-heading font-semibold leading-tight">
            {company.startYear} - {company.endYear || 'présent'}
          </span>
        </div>

        <div className="relative container flex flex-row items-center mx-auto z-10">
          <div className="flex-1 flex flex-row flex-no-wrap overflow-hidden">
            <div className="w-full md:w-1/2 mr-4 flex flex-row flex-no-wrap overflow-hidden">
              {applications}
            </div>
            <div className="hidden md:block relative w-1/2 pb-8 px-4 overflow-hidden">
              <BrowserIllustration
                url={this.currentApplication().url}
                screenshot={this.currentApplication().browserScreenshot}
                screenshotAlt={`Capture d'écran du site ${this.currentApplication().name}`}
              />
              <MobileIllustration
                url={this.currentApplication().url}
                screenshot={this.currentApplication().mobileScreenshot}
                screenshotAlt={`Capture d'écran sur smartphone du site ${this.currentApplication().name}`}
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
              style={{ color: this.brandColor() }}
            />
          </button>
        </div>
      </div>
    );
  }
}

Company.propTypes = {
  bgColor: PropTypes.string.isRequired,
  company: PropTypes.shape({
    name: PropTypes.string,
    role: PropTypes.string,
    startYear: PropTypes.string,
    endYear: PropTypes.string,
    applications: PropTypes.array,
  }).isRequired,
};
