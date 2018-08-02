import React from 'react';
import PropTypes from 'prop-types';
import * as Icons from 'react-feather';
import { capitalize } from 'lodash';

const ExternalLink = function ExternalLink({ name, url }) {
  const iconName = capitalize(name);
  if (!Object.keys(Icons).includes(iconName)) return '';

  const Icon = Icons[iconName];

  return (
    <a
      href={url}
      title={`Visiter mon profil sur ${name}`}
      className="flex items-center justify-center w-10 h-10 text-black bg-grey-dark hover:bg-white focus:bg-white rounded-full mx-2"
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

export default ExternalLink;
