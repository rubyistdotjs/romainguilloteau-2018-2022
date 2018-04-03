import React, { Component } from 'react';
import Company from './Company';
import companiesJSON from '../database/companies.json';

export default class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = { companies: [] };
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

    return (
      <section>
        <div className="container px-8 mx-auto">
          <h2 className="text-3xl ">Expérience professionnelle</h2>
        </div>

        {companies}
      </section>
    );
  }
}
