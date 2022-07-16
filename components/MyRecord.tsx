import { useState } from "react"
import { DifficultyList, DifficultyValues } from "./../hooks/useMusic.ts"
import { ClearStatusList, ClearStatusValues } from "../hooks/useRecord.ts"
import { Barrel } from "./Barrel.tsx"
import { Clear } from "./Clear.tsx"
import { Difficulty } from "./Difficulty.tsx"
import { Music } from "./Music.tsx"

export const MyRecord = (props: Props) => {
  const [ isHovers, setHovers ] = useState(new Array<boolean>(Object.keys(DifficultyList).length).fill(false))
  const changeMyHoverState = (difficulty: DifficultyValues, isHover: boolean) => {
    const copyHovers = [...isHovers]
    copyHovers[difficulty] = isHover
    setHovers(copyHovers)
  }

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
        >
          { Object.values(props.filter).map(v => isHovers[v] ? (
            <div onMouseLeave={ () => changeMyHoverState(v, false) }>
              <Barrel
                key={ v.toString() }
                increment={ () => props.increment(v as ClearStatusValues) }
                decrement={ () => props.decrement(v as ClearStatusValues) }
                >
                <Clear
                  key={ v.toString() }
                  status={ props.result[v] ?? ClearStatusList.NOPLAY }
                />
              </Barrel>
            </div>
          ) : (
            <div className="w-full text-center" onMouseEnter={ () => changeMyHoverState(v, true) }>
              <Clear
                key={ v.toString() }
                status={ props.result[v] ?? ClearStatusList.NOPLAY }
              />
            </div>
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
