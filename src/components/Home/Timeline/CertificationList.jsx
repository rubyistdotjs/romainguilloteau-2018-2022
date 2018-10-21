import React from 'react';
import { injectIntl, intlShape } from 'react-intl';
import Title from './Title';

class CertificationList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      certifications: [],
    };
  }

  async fetchCertifications() {
    const { intl } = this.props;
    return await import(`../../../database/${intl.locale}/certifications.json`);
  }

  componentDidMount() {
    this.fetchCertifications().then((json) => {
      this.setState({ certifications: json });
    });
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
