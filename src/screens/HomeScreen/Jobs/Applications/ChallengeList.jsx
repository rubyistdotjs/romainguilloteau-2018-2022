import React from 'react';
import PropTypes from 'prop-types';

function ChallengeList({ challenges }) {
  if (!challenges || challenges.length === 0) return '';

  const listItems = challenges.map((challenge, index) => (
    <li key={index} className="block leading-normal py-1">
      {challenge}
    </li>
  ));

  return <ul className="text-gray-600 text-sm">{listItems}</ul>;
}

ChallengeList.propTypes = {
  challenges: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ChallengeList;
