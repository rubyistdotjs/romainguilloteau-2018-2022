import React from 'react';

export default function CompanyApplicationTag({ tag }) {
  const small = tag.legacy ? (
    <small className="align-middle leading-none">(legacy)</small>
  ) : (
    ''
  );

  return (
    <span className="label">
      {tag.name} {small}
    </span>
  );
}
