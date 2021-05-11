import React from 'react';

import { useDatabaseFile } from '../../services/database';

import Section from '../../components/Section';
import Title from './Title';

function Diplomas() {
  const diplomas = useDatabaseFile({ filename: 'diplomas' });

  return (
    <Section emoji="graduation-cap" title="Diplomas">
      {diplomas.map((diploma) => (
        <div key={diploma.startedAt} className="mb-20 md:mb-24">
          <Title
            title={diploma.name}
            fromDate={diploma.startedAt}
            toDate={diploma.endedAt}
            atPlace={diploma.school}
          />
        </div>
      ))}
    </Section>
  );
}

export default Diplomas;
