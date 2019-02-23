import React from 'react';
import camelCase from 'lodash/camelCase';
import { injectIntl, intlShape } from 'react-intl';

import SocialLink from './SocialLink';

class SocialLinkList extends React.PureComponent {
  state = {
    socialLinks: [],
  };

  async fetchSocialLinks() {
    const { intl } = this.props;
    return import(`../../database/${intl.locale}/social-links.json`);
  }

  async componentDidMount() {
    const { default: socialLinks } = await this.fetchSocialLinks();
    this.setState({ socialLinks });
  }

  render() {
    const { socialLinks } = this.state;
    const links = socialLinks.map(link => (
      <SocialLink key={camelCase(link.name)} name={link.name} url={link.url} />
    ));

    return <div className="hidden sm:flex flex-row">{links}</div>;
  }
}

SocialLinkList.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(SocialLinkList);
