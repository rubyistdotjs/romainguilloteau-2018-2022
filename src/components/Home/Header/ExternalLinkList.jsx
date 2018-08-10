import React from 'react';
import { camelCase } from 'lodash';
import externalLinksJSON from '../../../database/external-links.json';
import ExternalLink from './ExternalLink';

export default class ExternalLinkList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      externalLinks: [],
    };
  }

  componentDidMount() {
    this.setState({ externalLinks: externalLinksJSON });
  }

  render() {
    const links = this.state.externalLinks.map(link => (
      <ExternalLink
        key={camelCase(link.name)}
        name={link.name}
        url={link.url}
      />
    ));

    return (
      <div className="flex flex-row">
        {links}
      </div>
    );
  }
}
