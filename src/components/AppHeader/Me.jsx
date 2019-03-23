import React from 'react';
import { injectIntl, intlShape } from 'react-intl';
import { Link } from 'react-router-dom';

import mugshotJpg from '../../images/avatars/mugshot-thumbnail.jpg';
import mugshotWebp from '../../images/avatars/mugshot-thumbnail.webp';
import mugshotJp2 from '../../images/avatars/mugshot-thumbnail.jp2';

function Me({ intl }) {
  const { locale } = intl;

  return (
    <Link to={`/${locale}`} className="flex flex-row items-center no-underline">
      <picture className="w-10 h-10 md:w-12 md:h-12 mr-2 rounded-full overflow-hidden">
        <source srcSet={mugshotJp2} type="image/jp2" className="w-full" />
        <source srcSet={mugshotWebp} type="image/webp" className="w-full" />
        <img src={mugshotJpg} alt="Romain Guilloteau" className="w-full" />
      </picture>
      <span className="flex flex-col text-black text-base md:text-xl font-bold leading-tight">
        Romain Guilloteau
        <span className="text-grey-darker text-xs md:text-base font-semibold">
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
