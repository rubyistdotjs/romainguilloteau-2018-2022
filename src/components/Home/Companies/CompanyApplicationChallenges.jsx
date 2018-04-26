import React from 'react';

export default function CompanyApplicationChallenges({ challenges }) {
  const listItems = challenges.map((challenge, index) => (
    <li key={index} className="block py-1">
      {challenge}
    </li>
  ));

  return (
    <ul className="list-reset text-grey-darker text-sm hidden lg:block xl:block">
      {listItems}
    </ul>
  );
}
