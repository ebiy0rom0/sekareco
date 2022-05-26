import { ClearStatusList, ClearStatusValues } from '../hooks/useRecord.tsx'

export const Clear = (props: Props) => (
  <p className={ [props?.class, classSet[props.status]].join(' ') }>
    { props.status }
  </p>
)

type Props = {
  class?: string
  status: ClearStatusValues
}

const classSet = {
  [ClearStatusList.NOPLAY]:      'c-noplay',
  [ClearStatusList.CLEAR]:       'c-clear',
  [ClearStatusList.FULL_COMBO]:  'c-fc',
  [ClearStatusList.ALL_PERFECT]: 'c-ap'
}
