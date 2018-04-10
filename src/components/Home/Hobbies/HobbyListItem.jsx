import React from 'react'

export default function HobbyListItem({ itemTitle, itemSubtitle }) {

  return (
    <li className="hobby">
      <h5 className="font-semibold text-base truncate" title={itemTitle}>
        {itemTitle}
      </h5>
      <span className="text-sm text-white-dark truncate">
        {itemSubtitle}
      </span>
    </li>
  )
}
