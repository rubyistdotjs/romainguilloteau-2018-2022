import React from 'react';
import { injectIntl, intlShape } from 'react-intl';
import { Link } from 'react-router-dom';

import mugshotJpg from '../../images/avatars/mugshot-thumbnail.jpg';

function Me({ intl }) {
  const { locale } = intl;

  return (
    <Link to={`/${locale}/`} className="flex flex-row items-center">
      <img
        src={mugshotJpg}
        alt="Romain Guilloteau"
        className="w-10 h-10 md:w-12 md:h-12 mr-2 rounded-full overflow-hidden"
      />
      <span className="flex flex-col text-white text-base md:text-xl font-medium leading-tight">
        Romain Guilloteau
        <span className="text-gray-500 text-sm md:text-base font-normal">
          rubyistdotjs
        </span>
      </span>
    </Link>
  );
}

Me.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(Me);
