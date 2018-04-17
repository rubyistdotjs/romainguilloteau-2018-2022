import React from 'react'

export default function Link({ url, children }) {
  return (
    <a href={url} rel="nofollow noreferrer">
      {children}
    </a>
  )
}
