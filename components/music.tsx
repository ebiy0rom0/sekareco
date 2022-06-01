import React from "react"

export const Music = React.memo((props: Props) => (
  <div className={ ["relative", props?.className].join(" ") }>
    <label className="absolute inset-x-0 bottom-0 bg-white/65 text-xs text-slate-800 indent-1.5">
      { props.title }
    </label>
    <img height="50" src={ props.url } className="inline-block" />
  </div>
))

type Props = {
  className?: string
  title: string
  url: string
}
