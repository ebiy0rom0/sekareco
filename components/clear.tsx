import { ClearStatusList, ClearStatusValues } from "../hooks/useRecord.tsx"

export const Clear = (props: Props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
    <polygon points="0,10 10,0 20,10 10,20" className={ ["stroke-3 stroke-slate-900", fillSet[props.status]].join(" ") } />
  </svg>
)

type Props = {
  class?: string
  status: ClearStatusValues
}

const fillSet = {
  [ClearStatusList.NOPLAY]:      "fill-slate-900",
  [ClearStatusList.CLEAR]:       "fill-yellow-300",
  [ClearStatusList.FULL_COMBO]:  "fill-fuchsia-300",
  [ClearStatusList.ALL_PERFECT]: "fill-blue-400"
}
