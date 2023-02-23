import React from 'react'

export default function HelloWorld(props) {
  const {
    greetee = 'World'
  } = props

  return (
    <div>Hello, {greetee}!</div>
  )
}