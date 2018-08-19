import React from 'react';
import mugshotJpg from '../../../images/avatars/mugshot.jpg';
import mugshotWebp from '../../../images/avatars/mugshot.webp';
import mugshotJp2 from '../../../images/avatars/mugshot.jp2';

export default function Me() {
  return (
    <div className="flex flex-row items-center">
      <picture className="w-10 h-10 mr-2 rounded-full overflow-hidden">
        <source srcSet={mugshotJp2} type="image/jp2" className="w-full" />
        <source srcSet={mugshotWebp} type="image/webp" className="w-full" />
        <img src={mugshotJpg} alt="Romain Guilloteau" className="w-full" />
      </picture>
      <span className="text-grey-darkest sm:text-xl md:text-2xl font-semibold">
        Romain Guilloteau
      </span>
    </div>
  );
}
