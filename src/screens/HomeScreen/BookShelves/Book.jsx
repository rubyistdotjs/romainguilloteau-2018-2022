import React from 'react';
import PropTypes from 'prop-types';

import ExternalLink from '../../../components/ExternalLink';

function Book({ title, author, url, coverUrl }) {
  return (
    <div className="flex flex-row mb-5">
      <div className="w-10 h-full mr-3 flex-shrink-0">
        <img
          src={coverUrl}
          alt={`Cover of the book ${title}`}
          className="w-full h-auto rounded-sm"
        />
      </div>
      <div className="flex flex-col items-start -mt-1 overflow-x-hidden">
        <ExternalLink
          href={url}
          title={`Check out "${title}" on Goodreads`}
          rel="nofollow"
          className="w-full text-gray-900 text-lg font-medium leading-tight hover:text-teal-500 focus:text-teal-500 truncate transition-colors duration-150"
        >
          {title}
        </ExternalLink>
        <span className="text-base text-gray-700">{author}</span>
      </div>
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  coverUrl: PropTypes.string.isRequired,
};

export default Book;
