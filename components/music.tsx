import React from 'react'

export const Music = (props: Props) => (
  <div className={ props?.class }>
    <img height='50' width='50' src={ props.url } />
    <p>{ props.title }</p>
  </div>
)

type Props = {
  class?: string
  title: string
  url: string
}