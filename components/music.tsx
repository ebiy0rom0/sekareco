import React from "react"

export const Music = React.memo((props: Props) => (
  <div className={ ["relative", props?.className].join(" ") }>
    <label className="absolute inset-x-0 bottom-0 bg-white/65 font-semibold text-xs text-slate-800 indent-1.5">
      { props.title }
    </label>
    <img height="53" src={ props.url } className="inline-block" />
  </div>
))

type Props = {
  className?: string
  title: string
  url: string
}
