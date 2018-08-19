import React from 'react';
import PropTypes from 'prop-types';

export default function ApplicationChallenges({ challenges }) {
  const listItems = challenges.map((challenge, index) => (
    <li key={index} className="block leading-normal py-1">
      {challenge}
    </li>
  ));

  return (
    <ul className="list-reset text-grey-darker text-sm hidden lg:block xl:block">
      {listItems}
    </ul>
  );
}

ApplicationChallenges.propTypes = {
  challenges: PropTypes.arrayOf(PropTypes.string).isRequired,
};
