import { DifficultyValues } from './../hooks/useMusic.tsx'
import { ClearStatusList, ClearStatusValues } from '../hooks/useRecord.tsx'
import { Clear } from './clear.tsx'
import { Difficulty } from './difficulty.tsx'
import { Music } from './music.tsx'

export const MyRecord = (props: Props) => (
  <div className='my-record-container'>
    <Music class='item-music' title={ props.title } url={ props.url } />
    { Object.values(props.filter).map(v => (
      <Difficulty
        key={ v.toString() }
        class='item-difficulty'
        difficulty={ v }
        level={ props.level[v] }
      />
    )) }
    { Object.values(props.filter).map(v => (
      <Clear
        key={ v.toString() }
        class='item-clear'
        status={ props.result[v] ?? ClearStatusList.NOPLAY }
      />
    )) }
  </div>
)

  type Props = {
    title: string
    url: string
    result: ClearStatusValues[]
    filter: DifficultyValues[]
    level: number[]
  }
