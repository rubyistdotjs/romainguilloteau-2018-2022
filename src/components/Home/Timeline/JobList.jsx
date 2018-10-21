import React from 'react';
import { injectIntl, intlShape } from 'react-intl';
import Title from './Title';
import ApplicationList from './Applications';

class JobList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      jobs: [],
    };
  }

  async fetchJobs() {
    const { intl } = this.props;
    return await import(`../../../database/${intl.locale}/jobs.json`);
  }

  componentDidMount() {
    this.fetchJobs().then((json) => {
      this.setState({ jobs: json });
    });
  }

  render() {
    const { jobs } = this.state;

    return (
      <div>
        {jobs.map(job => (
          <div key={job.startedAt} className="py-24">
            <Title
              title={job.title}
              fromDate={job.startedAt}
              toDate={job.endedAt}
              atPlace={job.company}
            />
            <ApplicationList applications={job.applications} />
          </div>
        ))}
      </div>
    );
  }
}

JobList.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(JobList);
