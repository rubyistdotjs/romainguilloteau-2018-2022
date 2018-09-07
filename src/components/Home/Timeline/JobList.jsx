import React from 'react';
import Title from './Title';
import ApplicationList from './Applications';

import jobsJSON from '../../../database/jobs.json';

export default class JobList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      jobs: [],
    };
  }

  componentDidMount() {
    this.setState({
      jobs: jobsJSON,
    });
  }

  render() {
    const { jobs } = this.state;

    return (
      <div>
        {jobs.map(job => (
          <div className="py-8">
            <Title
              title={job.title}
              fromDate={job.startedAt}
              toDate={job.ndedAt}
              atPlace={job.company}
            />
            <ApplicationList applications={job.applications} />
          </div>
        ))}
      </div>
    );
  }
}
