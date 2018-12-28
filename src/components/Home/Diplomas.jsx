import React from 'react';
import { injectIntl, intlShape, defineMessages } from 'react-intl';

import Section from './Section';
import Title from './Title';

const i18n = defineMessages({
  title: {
    id: 'home.diplomas.title',
    defaultMessage: 'Diplomas',
  },
});

class Diplomas extends React.PureComponent {
  state = {
    diplomas: [],
  };

  async fetchDiplomas() {
    const { intl } = this.props;
    return await import(`../../database/${intl.locale}/diplomas.json`);
  }

  async componentDidMount() {
    const { default: diplomas } = await this.fetchDiplomas();
    this.setState({ diplomas });
  }

  render() {
    const { diplomas } = this.state;
    const { formatMessage } = this.props.intl;

    return (
      <Section emoji="🎓" title={formatMessage(i18n.title)}>
        {diplomas.map(diploma => (
          <div key={diploma.startedAt} className="pb-16">
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
}

Diplomas.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(Diplomas);
