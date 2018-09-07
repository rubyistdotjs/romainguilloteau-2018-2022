import React from 'react';
import PropTypes from 'prop-types';
import * as Icons from 'react-feather';
import { capitalize } from 'lodash';

export default function ExternalLink({ name, url }) {
  const iconName = capitalize(name);
  if (!Object.keys(Icons).includes(iconName)) return '';

  const Icon = Icons[iconName];

  return (
    <a
      href={url}
      title={`Visiter mon profil sur ${name}`}
      className="badge"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon size={24} />
    </a>
  );
}

ExternalLink.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
