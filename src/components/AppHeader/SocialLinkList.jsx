import React from 'react';
import camelCase from 'lodash/camelCase';

import { useDatabaseFile } from '../../services/database';

import SocialLink from './SocialLink';

function SocialLinkList() {
  const socialLinks = useDatabaseFile({ filename: 'social-links' });

  const links = socialLinks.map((link) => (
    <SocialLink key={camelCase(link.name)} name={link.name} url={link.url} />
  ));

  return <div className="hidden sm:flex flex-row">{links}</div>;
}

export default SocialLinkList;
