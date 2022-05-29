import { DifficultyValues } from './../hooks/useMusic.tsx'
import { ClearStatusList, ClearStatusValues } from '../hooks/useRecord.tsx'
import { Clear } from './clear.tsx'
import { Difficulty } from './difficulty.tsx'
import { Music } from './music.tsx'

export const MyRecord = (props: Props) => (
  <div className='music flex'>
    <Music class='music__master' title={ props.title } url={ props.url } />
    <div className="music__record flex-col">
      <div className="difficulty grid grid-cols-6">
        { Object.values(props.filter).map(v => (
          <Difficulty
            key={ v.toString() }
            difficulty={ v }
            level={ props.level[v] }
          />
        )) }
      </div>
      <div className="record grid grid-cols-6 justify-items-center">
        { Object.values(props.filter).map(v => (
          <Clear
            key={ v.toString() }
            status={ props.result[v] ?? ClearStatusList.NOPLAY }
          />
        )) }
      </div>
    </div>
  </div>
)

  type Props = {
    title: string
    url: string
    result: ClearStatusValues[]
    filter: DifficultyValues[]
    level: number[]
  }
