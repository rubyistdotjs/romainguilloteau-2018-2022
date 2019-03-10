import React, { useState, useEffect } from 'react';
import { injectIntl, intlShape, defineMessages } from 'react-intl';

import fetchDatabaseFile from '../../../services/database';

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
  const [jobs, setJobs] = useState([]);
  const { locale, formatMessage } = intl;

  useEffect(() => {
    fetchDatabaseFile({
      filename: 'jobs',
      locale: locale,
      setState: setJobs,
    });
  }, [locale]);

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
