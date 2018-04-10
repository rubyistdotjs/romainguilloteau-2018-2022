import React from 'react';

export default function CompanyApplicationChallenges({ challenges, visible }) {
  if (!visible) return null;

  const listItems = challenges.map((challenge, index) => (
    <li key={index} className="challenge">
      {challenge}
    </li>
  ));

  return (
    <ul className="list-reset bg-grey-lightest mb-6 -mt-2">{listItems}</ul>
  );
}
