import React from 'react';

export default function HobbyListItemRoadtripSubtitle({ distance, mapsUrl }) {
  return (
    <React.Fragment>
      {distance}Km
      <span className="px-2">-</span>
      <a
        href={mapsUrl}
        rel="nofollow noreferrer"
        target="_blank"
        className="text-blue-light hover:text-blue-lighter text-xs no-underline"
      >
        voir sur Google Maps
      </a>
    </React.Fragment>
  );
}
