import React, { useState, useEffect } from 'react';
import camelCase from 'lodash/camelCase';
import { injectIntl, intlShape } from 'react-intl';

import fetchDatabaseFile from '../../services/database';

import SocialLink from './SocialLink';

function SocialLinkList({ intl }) {
  const [socialLinks, setSocialLinks] = useState([]);

  useEffect(() => {
    fetchDatabaseFile({
      filename: 'social-links',
      locale: intl.locale,
      setState: setSocialLinks,
    });
  }, [intl.locale]);

  const links = socialLinks.map(link => (
    <SocialLink key={camelCase(link.name)} name={link.name} url={link.url} />
  ));

  return <div className="hidden sm:flex flex-row">{links}</div>;
}

SocialLinkList.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(SocialLinkList);
