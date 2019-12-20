import React from 'react';
import camelCase from 'lodash/camelCase';
import { useIntl } from 'react-intl';

import { useDatabaseFile } from '../../services/database';

import SocialLink from './SocialLink';

function SocialLinkList() {
  const intl = useIntl();

  const socialLinks = useDatabaseFile({
    filename: 'social-links',
    locale: intl.locale,
  });

  const links = socialLinks.map(link => (
    <SocialLink key={camelCase(link.name)} name={link.name} url={link.url} />
  ));

  return <div className="hidden sm:flex flex-row">{links}</div>;
}

export default SocialLinkList;
