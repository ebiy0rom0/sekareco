import React from "react"

export const Navigation = React.memo((props: Props) => (
  <div className={ ["nav", props?.className].join(" ") }>
    <h3 className="nav__title">機能 一覧</h3>
  </div>
))

type Props = {
  className?: string
}