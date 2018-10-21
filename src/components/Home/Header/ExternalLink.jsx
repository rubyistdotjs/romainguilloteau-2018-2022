import React from 'react';
import PropTypes from 'prop-types';
import * as Icons from 'react-feather';
import { capitalize } from 'lodash';
import { injectIntl, intlShape, defineMessages } from 'react-intl';

const i18n = defineMessages({
  visitProfile: {
    id: 'home.header.externalLink.visitProfileOn',
    defaultMessage: 'Check out my profile on {socialNetwork}',
  },
});

function ExternalLink({ intl, name, url }) {
  const iconName = capitalize(name);
  if (!Object.keys(Icons).includes(iconName)) return '';

  const Icon = Icons[iconName];
  const { formatMessage } = intl;

  return (
    <a
      href={url}
      title={formatMessage(i18n.visitProfile, { socialNetwork: name })}
      className={`badge badge-${name.toLowerCase()}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon size={20} />
    </a>
  );
}

ExternalLink.propTypes = {
  intl: intlShape.isRequired,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default injectIntl(ExternalLink);
