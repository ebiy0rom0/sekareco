import { Clear, ClearStatus } from './clear.tsx'
import { Difficulty } from './difficulty.tsx'
import { Music } from './music.tsx'
import { DifficultyList } from '../hooks/useMusic.tsx'

type Props = {
  title: string
  url: string
  result: typeof ClearStatus[keyof typeof ClearStatus][]
  level: number[]
}

export const MyRecord = (props: Props) => {
  const difficulty = Object.values(DifficultyList).map(v => (
    <Difficulty
      key={v.toString()}
      class='item-difficulty'
      difficulty={ v }
      level={ props.level[v] }
    />
  ))
  const clear = Object.values(DifficultyList).map(v => (
    <Clear
      key={v.toString()}
      class='item-clear'
      status={ props.result[v] ?? ClearStatus.NOPLAY }
    />
  ))

  return (
    <div className='my-record-container'>
      <Music class='item-music' title={ props.title } url={ props.url } />
      { difficulty }
      { clear }
    </div>
  )
}