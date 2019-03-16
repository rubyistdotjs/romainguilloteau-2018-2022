import React from 'react';
import { injectIntl, intlShape, defineMessages } from 'react-intl';

import { useDatabaseFile } from '../../../services/database';

import Section from '../../../components/Section';
import Title from '../Title';
import ApplicationList from './Applications';

const i18n = defineMessages({
  title: {
    id: 'home.jobs.title',
    defaultMessage: 'Experience',
  },
});

function Jobs({ intl }) {
  const { locale, formatMessage } = intl;
  const jobs = useDatabaseFile({ filename: 'jobs', locale });

  return (
    <Section emoji="💼" title={formatMessage(i18n.title)}>
      {jobs.map(job => (
        <div key={job.startedAt} className="mb-20 md:mb-24">
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

Jobs.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(Jobs);
