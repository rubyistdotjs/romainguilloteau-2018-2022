import React from 'react';

function ExternalLink(props) {
  const { target, rel, children, ...otherProps } = props;
  const safeRel = ['noopener noreferrer', rel].filter(s => s).join(' ');

  return (
    <a target={target} rel={safeRel} {...otherProps}>
      {children}
    </a>
  );
}

ExternalLink.defaultProps = {
  target: '_blank',
  rel: null,
};

export default ExternalLink;
