import React from 'react';
import mugshotJpg from '../../../images/avatars/mugshot-thumbnail.jpg';
import mugshotWebp from '../../../images/avatars/mugshot-thumbnail.webp';
import mugshotJp2 from '../../../images/avatars/mugshot-thumbnail.jp2';

export default function Me() {
  return (
    <div className="flex flex-row items-center">
      <picture className="w-8 h-8 md:w-10 md:h-10 mr-1 md:mr-2 rounded-full overflow-hidden">
        <source srcSet={mugshotJp2} type="image/jp2" className="w-full" />
        <source srcSet={mugshotWebp} type="image/webp" className="w-full" />
        <img src={mugshotJpg} alt="Romain Guilloteau" className="w-full" />
      </picture>
      <span className="text-black text-base md:text-xl font-bold">
        Romain Guilloteau
      </span>
    </div>
  );
}
