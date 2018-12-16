import React from 'react';
import { injectIntl, intlShape } from 'react-intl';
import Title from './Title';

class CertificationList extends React.PureComponent {
  state = {
    certifications: [],
  };

  async fetchCertifications() {
    const { intl } = this.props;
    return await import(`../../../database/${intl.locale}/certifications.json`);
  }

  async componentDidMount() {
    const { default: certifications } = await this.fetchCertifications();
    this.setState({ certifications });
  }

  render() {
    const { certifications } = this.state;

    return (
      <div>
        {certifications.map(certification => (
          <div key={certification.startedAt} className="py-12">
            <Title
              title={certification.name}
              fromDate={certification.startedAt}
              toDate={certification.endedAt}
              atPlace={certification.school}
            />
          </div>
        ))}
      </div>
    );
  }
}

CertificationList.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(CertificationList);
