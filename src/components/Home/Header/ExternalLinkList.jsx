import React from 'react';
import { camelCase } from 'lodash';
import { injectIntl, intlShape } from 'react-intl';
import ExternalLink from './ExternalLink';

class ExternalLinkList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      externalLinks: [],
    };
  }

  async fetchExternalLinks() {
    const { intl } = this.props;
    return import(`../../../database/${intl.locale}/external-links.json`);
  }

  componentDidMount() {
    this.fetchExternalLinks().then(({ default: json }) => {
      this.setState({ externalLinks: json });
    });
  }

  render() {
    const { externalLinks } = this.state;
    const links = externalLinks.map(link => (
      <ExternalLink
        key={camelCase(link.name)}
        name={link.name}
        url={link.url}
      />
    ));

    return <div className="hidden sm:flex flex-row">{links}</div>;
  }
}

ExternalLinkList.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(ExternalLinkList);
