import React from 'react';
import camelCase from 'lodash/camelCase';
import { injectIntl, intlShape } from 'react-intl';
import ExternalLink from './ExternalLink';

class ExternalLinkList extends React.PureComponent {
  state = {
    externalLinks: [],
  };

  async fetchExternalLinks() {
    const { intl } = this.props;
    return import(`../../../database/${intl.locale}/external-links.json`);
  }

  async componentDidMount() {
    const { default: externalLinks } = await this.fetchExternalLinks();
    this.setState({ externalLinks });
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
