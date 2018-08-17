import React, { Component } from 'react';
import Job from './Job';
import jobsJSON from '../../../database/jobs.json';

export default class Jobs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jobs: [],
    };
  }

  componentDidMount() {
    this.setState({ jobs: jobsJSON });
  }

  render() {
    const jobs = this.state.jobs.map((job, index) => (
      <Job
        key={job.title.toLowerCase()}
        job={job}
        bgColor={index % 2 === 0 ? 'white' : 'grey-lightest'}
      />
    ));

    return (
      <section>
        <div className="pl-8 py-8">
          <div className="container mx-auto">
            <h2 className="font-heading text-4xl lg:text-5xl text-black antialiased font-extrabold">
              Expérience
            </h2>
          </div>
        </div>
        {jobs}
      </section>
    );
  }
}
