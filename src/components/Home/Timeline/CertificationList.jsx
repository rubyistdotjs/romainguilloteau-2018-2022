import React from 'react';
import Title from './Title';

import certificationsJSON from '../../../database/certifications.json';

export default class Certification extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      certifications: [],
    };
  }

  componentDidMount() {
    this.setState({
      certifications: certificationsJSON,
    });
  }

  render() {
    const { certifications } = this.state;

    return (
      <div>
        {certifications.map(certification => (
          <div className="py-4">
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
