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
    const companies = this.state.companies.map((company, index) => (
      <Company
        key={company.name.toLowerCase()}
        company={company}
        bgColor={index % 2 === 0 ? 'white' : 'grey-lightest'}
      />
    ));

  return (
    <section>
      <div className="container py-8 mx-auto flex flex-col align-center">
        <h2 className="font-heading text-5xl text-black antialiased font-extrabold">
          Expérience
        </h2>
      </div>
      {companies}
    </section>
  );
  }
}
