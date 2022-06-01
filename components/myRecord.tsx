import { useState } from "react"
import { DifficultyValues } from "./../hooks/useMusic.tsx"
import { ClearStatusList, ClearStatusValues } from "../hooks/useRecord.tsx"
import { Toggle } from './toggle.tsx'
import { Clear } from "./clear.tsx"
import { Difficulty } from "./difficulty.tsx"
import { Music } from "./music.tsx"

export const MyRecord = (props: Props) => {
  const [ isHover, setHover ] = useState(false)
  return (
    <div className="flex border-b bg-slate-700/80 border-slate-500 hover:bg-slate-600/80 mt-1.5">
      <div className="music__master flex-none w-68 border-r">
        <Music title={ props.title } url={ props.url } />
      </div>
      <div className="music__record w-auto flex flex-col py-2 px-3">
        <div className="difficulty grid grid-cols-5 gap-x-6">
          { Object.values(props.filter).map(v => (
            <Difficulty
              key={ v.toString() }
              difficulty={ v }
              level={ props.level[v] }
            />
          )) }
        </div>
        <div
          className="record grid grid-cols-5 gap-x-6 mt-1 justify-items-center"
          onMouseEnter={ () => setHover(true) }
          onMouseLeave={ () => setHover(false) }
        >
          { Object.values(props.filter).map(v => isHover ? (
            <Toggle
              key={ v.toString() }
              increment={ () => props.increment(v as ClearStatusValues) }
              decrement={ () => props.decrement(v as ClearStatusValues) }
            >
              <Clear
                key={ v.toString() }
                status={ props.result[v] ?? ClearStatusList.NOPLAY }
              />
            </Toggle>
          ) : (
            <Clear
              key={ v.toString() }
              status={ props.result[v] ?? ClearStatusList.NOPLAY }
            />
          ))}
        </div>
      </div>
    </div>
  )
}

  type Props = {
    title: string
    url: string
    result: ClearStatusValues[]
    filter: DifficultyValues[]
    level: number[]
    increment: (c: ClearStatusValues) => void
    decrement: (c: ClearStatusValues) => void
  }
