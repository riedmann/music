import React from 'react'

type Props = {
    title: string,
    children: JSX.Element,
  };

export default function NestedLayout({title,children}: Props) {
  return (
    <div>
        <h3>Nested</h3>
        {children}
    </div>
  )
}