import React from 'react';

import { useDatabaseFile } from '../../../services/database';

import Section from '../../../components/Section';
import Title from '../Title';
import ApplicationList from './Applications';

function Jobs() {
  const jobs = useDatabaseFile({ filename: 'jobs' });

  return (
    <Section emoji="briefcase" title="Experience">
      {jobs.map((job) => (
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

export default Jobs;
