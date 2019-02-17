import React from 'react';
import { injectIntl, intlShape, defineMessages } from 'react-intl';

import Section from '../../../components/Section';
import Title from '../Title';
import ApplicationList from './Applications';

const i18n = defineMessages({
  title: {
    id: 'home.jobs.title',
    defaultMessage: 'Experience',
  },
});

class Jobs extends React.PureComponent {
  state = {
    jobs: [],
  };

  async fetchJobs() {
    const { intl } = this.props;
    return import(`../../../database/${intl.locale}/jobs.json`);
  }

  async componentDidMount() {
    const { default: jobs } = await this.fetchJobs();
    this.setState({ jobs });
  }

  render() {
    const { jobs } = this.state;
    const { formatMessage } = this.props.intl;

    return (
      <Section emoji="💼" title={formatMessage(i18n.title)}>
        {jobs.map(job => (
          <div key={job.startedAt} className="mb-16">
            <Title
              title={job.title}
              fromDate={job.startedAt}
              toDate={job.endedAt}
              atPlace={job.company}
            />
            <ApplicationList applications={job.applications} />
          </div>
        ))}
      </Section>
    );
  }
}

Jobs.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(Jobs);
