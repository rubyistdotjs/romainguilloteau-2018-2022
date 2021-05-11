import React from 'react';
import PropTypes from 'prop-types';
import * as Icons from 'react-feather';
import capitalize from 'lodash/capitalize';

import ExternalLink from '../ExternalLink';

function SocialLink({ name, url }) {
  // Component naming inconsistency in react-feather 1.1.4
  const iconName = name === 'GitHub' ? name : capitalize(name);
  if (!Object.keys(Icons).includes(iconName)) return '';

  const Icon = Icons[iconName];

  return (
    <ExternalLink
      href={url}
      title={`Check out my profile on ${name}`}
      className={`badge badge-${name.toLowerCase()}`}
    >
      <Icon size={20} />
    </ExternalLink>
  );
}

SocialLink.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default SocialLink;
