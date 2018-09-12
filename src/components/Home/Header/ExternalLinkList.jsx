import React from 'react';
import { camelCase } from 'lodash';
import externalLinksJSON from '../../../database/external-links.json';
import ExternalLink from './ExternalLink';

export default class ExternalLinkList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      externalLinks: [],
    };
  }

  componentDidMount() {
    this.setState({
      externalLinks: externalLinksJSON,
    });
  }

  render() {
    const { externalLinks } = this.state;
    const links = externalLinks.map(link => (
      <ExternalLink
        key={camelCase(link.name)}
        name={link.name}
        url={link.url}
      />
    ));

    return (
      <div className="hidden sm:flex flex-row">
        {links}
      </div>
    );
  }
}
