import React, { Component } from 'react';
import { camelCase } from 'lodash';
import CompanyApplicationTag from './CompanyApplicationTag';
import CompanyApplicationChallenges from './CompanyApplicationChallenges';

export default class CompanyApplication extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.state = {
      showChallenges: false,
    };
  }

  handleClick() {
    this.setState(prevState => ({
      showChallenges: !prevState.showChallenges,
    }));
  }

  render() {
    const { application } = this.props;
    const tags = application.tags.map(tag => (
      <CompanyApplicationTag key={camelCase(tag.name)} tag={tag} />
    ));

    return (
      <div className="mb-4 rounded bg-white overflow-hidden shadow">
        <div className="flex flex-row px-6 pt-6">
          <div className="w-12 h-12 bg-grey-light overflow-hidden rounded mr-2">
            <img
              src={`images/${application.logo}`}
              alt={`Logo de ${application.name}`}
              className="block"
            />
          </div>
          <div>
            <h4 className="font-medium font-semibold text-xl text-black leading-normal -mt-1">
              {application.name}
            </h4>
            <span className="text-base block font-semibold text-grey-dark leading-none">
              {application.timePeriod}
            </span>
          </div>
        </div>
        <p className="text-grey-darkest text-base leading-tight px-6 py-6">
          {application.description}
        </p>
        {application.challenges.length > 0 && (
          <p className="px-6 pb-6">
            <button
              type="button"
              className="block text-base text-blue hover:text-blue-dark"
              onClick={this.handleClick}
            >
              {this.state.showChallenges ? 'Cacher' : 'Voir'} les défis
              techniques
            </button>
          </p>
        )}
        <CompanyApplicationChallenges
          challenges={application.challenges}
          visible={this.state.showChallenges}
        />
        <div className="px-6 mb-4">{tags}</div>
      </div>
    );
  }
}
