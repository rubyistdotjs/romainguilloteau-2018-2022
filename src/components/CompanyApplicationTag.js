import React from 'react';

export default props => {
  const { tag } = props;
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
};
