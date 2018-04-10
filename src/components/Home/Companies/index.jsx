import React, { Component } from 'react';
import Company from './Company';
import companiesJSON from '../../../database/companies.json';

export default class Companies extends Component {
  constructor(props) {
    super(props);

    this.state = {
      companies: [],
    };
  }

  componentDidMount() {
    this.setState((prevState, props) => ({
      companies: companiesJSON,
    }));
  }

  render() {
    const companies = this.state.companies.map(company => (
      <Company key={company.name.toLowerCase()} company={company} />
    ));

    return <section className="bg-grey-lightest pb-8">{companies}</section>;
  }
}
