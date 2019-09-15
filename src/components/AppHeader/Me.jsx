import React from 'react';
import { Link } from 'react-router-dom';

import mugshotJpg from '../../images/avatars/mugshot-thumbnail.jpg';

function Me() {
  return (
    <Link to="/" className="flex flex-row items-center">
      <img
        src={mugshotJpg}
        alt="Romain Guilloteau"
        className="w-10 h-10 md:w-12 md:h-12 mr-2 rounded-full overflow-hidden"
      />
      <span className="flex flex-col text-black text-base md:text-xl font-medium leading-tight">
        Romain Guilloteau
        <span className="text-gray-700 text-sm md:text-base font-normal">
          rubyistdotjs
        </span>
      </span>
    </Link>
  );
}

export default Me;
