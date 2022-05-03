
export const ClearStatus = {
  NOPLAY:     0,
  CLEAR:      1,
  FULLCOMBO:  2,
  ALLPERFECT: 3
} as const

type T = typeof ClearStatus[keyof typeof ClearStatus]

const classSet = {
  [ClearStatus.NOPLAY]:     'c-noplay',
  [ClearStatus.CLEAR]:      'c-clear',
  [ClearStatus.FULLCOMBO]:  'c-fc',
  [ClearStatus.ALLPERFECT]: 'c-ap'
}
type Props = {
  class?: string
  status: T
}

export const Clear = (props: Props) => (
  <p className={ props?.class }>{ props.status }</p>
)