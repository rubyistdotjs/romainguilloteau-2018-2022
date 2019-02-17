import React from 'react';
import PropTypes from 'prop-types';
import * as Icons from 'react-feather';
import capitalize from 'lodash/capitalize';
import { injectIntl, intlShape, defineMessages } from 'react-intl';

import ExternalLink from '../../../components/ExternalLink';

const i18n = defineMessages({
  visitProfile: {
    id: 'home.header.socialLink.visitProfileOn',
    defaultMessage: 'Check out my profile on {socialNetwork}',
  },
});

function SocialLink({ intl, name, url }) {
  // Component naming inconsistency in react-feather 1.1.4
  const iconName = name === 'GitHub' ? name : capitalize(name);
  if (!Object.keys(Icons).includes(iconName)) return '';

  const Icon = Icons[iconName];
  const { formatMessage } = intl;

  return (
    <ExternalLink
      href={url}
      title={formatMessage(i18n.visitProfile, { socialNetwork: name })}
      className={`badge badge-${name.toLowerCase()}`}
    >
      <Icon size={20} />
    </ExternalLink>
  );
}

SocialLink.propTypes = {
  intl: intlShape.isRequired,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default injectIntl(SocialLink);
