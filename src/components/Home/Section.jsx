import React from 'react'

export default function Section({ bgColor, children }) {
  return (
    <section className={`bg-${bgColor} py-8`}>
      {children}
    </section>
  )
}
