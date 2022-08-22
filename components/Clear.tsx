import React from "react"
import { clearStatus, ClearStatus } from "../types/index.ts"

export const Clear = React.memo((props: Props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
    <polygon points="0,10 10,0 20,10 10,20" className={ ["stroke-3 stroke-slate-900", fillSet[props.status]].join(" ") } />
  </svg>
))

type Props = {
  class?: string
  status: ClearStatus
}

const fillSet = {
  [clearStatus.NOPLAY]:      "fill-slate-900",
  [clearStatus.CLEAR]:       "fill-yellow-300",
  [clearStatus.FULL_COMBO]:  "fill-fuchsia-300",
  [clearStatus.ALL_PERFECT]: "fill-blue-400"
}
