import React from 'react';

export default function CompanyApplicationTag({ tag }) {
  const small = tag.legacy ? (
    <small className="align-middle leading-none">(legacy)</small>
  ) : (
    ''
  );

  return (
    <span className="inline-block text-grey-darker text-sm mr-2 mb-2 px-2 py-1 bg-grey-lighter rounded-sm">
      {tag.name} {small}
    </span>
  );
}
