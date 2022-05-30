import React from "react"

export const Music = React.memo((props: Props) => {
  console.log("render music: " + props.title)
  return (
  <div className={ props?.className }>
    <img height="30" width="30" src={ props.url } />
    <p>{ props.title }</p>
  </div>
)})

type Props = {
  className?: string
  title: string
  url: string
}
