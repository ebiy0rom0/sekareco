import { ClearStatusList, ClearStatusValues } from '../hooks/useRecord.tsx'

export const Clear = (props: Props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fillOpacity="1.0">
    <polygon points="0,10 10,0 20,10 10,20" className="stroke-2 stroke-gray-900 fill-yellow-300" />
  </svg>
)

type Props = {
  class?: string
  status: ClearStatusValues
}

const classSet = {
  [ClearStatusList.NOPLAY]:      'record__noplay',
  [ClearStatusList.CLEAR]:       'record__clear',
  [ClearStatusList.FULL_COMBO]:  'record__full-combo',
  [ClearStatusList.ALL_PERFECT]: 'record__all-perfect'
}
