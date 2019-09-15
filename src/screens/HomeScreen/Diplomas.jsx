import React from 'react';
import { injectIntl, intlShape, defineMessages } from 'react-intl';

import { useDatabaseFile } from '../../services/database';

import Section from '../../components/Section';
import Title from './Title';

const i18n = defineMessages({
  title: {
    id: 'home.diplomas.title',
    defaultMessage: 'Diplomas',
  },
});

function Diplomas({ intl }) {
  const { locale, formatMessage } = intl;
  const diplomas = useDatabaseFile({ filename: 'diplomas', locale });

  return (
    <Section emoji="graduation-cap" title={formatMessage(i18n.title)}>
      {diplomas.map(diploma => (
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

Diplomas.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(Diplomas);
