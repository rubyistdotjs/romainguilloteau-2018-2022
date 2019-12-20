import React from 'react';
import { useIntl, defineMessages } from 'react-intl';

import Section from '../../components/Section';

import { useDatabaseFile } from '../../services/database';

const i18n = defineMessages({
  title: {
    id: 'home.knowledges.title',
    defaultMessage: 'Knowledge',
  },
});

function extractItems({ knowledges, state }) {
  return knowledges.filter(item => item.state === state).map(item => item.name);
}

function Knowledges() {
  const { locale, formatMessage } = useIntl();
  const knowledges = useDatabaseFile({ filename: 'knowledges', locale });

  const knownItems = extractItems({ knowledges, state: 'known' });
  const learningItems = extractItems({ knowledges, state: 'learning' });

  return (
    <Section emoji="man-tipping" title={formatMessage(i18n.title)}>
      <h3 className="text-black text-2xl lg:text-2xl font-bold leading-none mb-8">
        Stuff I know
      </h3>
      <div className="w-full">
        {knownItems.map(item => (
          <span className="inline-block text-grey-darkest text-sm font-semibold bg-grey-lighter px-3 py-1 rounded-full mr-1 mb-1">
            {item}
          </span>
        ))}
      </div>
    </Section>
  );
}

export default Knowledges;
