import { DifficultyList } from './difficulty.tsx'

type Props = {
  class?: string
  title: string
  url: string
}

export const Music = (props: Props) => (
  <div className={ props?.class }>
    <img height='50' width='50' src={ props.url } />
    <p>{ props.title }</p>
  </div>
)