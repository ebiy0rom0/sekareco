import { useState } from "react"
import { difficulty, Difficulty, clearStatus, ClearStatus } from "./../types/index.ts"
import { Barrel } from "./Barrel.tsx"
import { Clear } from "./Clear.tsx"
import { Difficulty as DiffComponent } from "./Difficulty.tsx"
import { Music } from "./Music.tsx"

export const MyRecord = (props: Props) => {
  const [ isHovers, setHovers ] = useState(new Array<boolean>(Object.keys(difficulty).length).fill(false))
  const changeMyHoverState = (difficulty: Difficulty, isHover: boolean) => {
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
            <DiffComponent
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
            <div
              key={ v.toString() }
              onMouseLeave={ () => changeMyHoverState(v, false) }
            >
              <Barrel
                increment={ () => props.increment(v as ClearStatus) }
                decrement={ () => props.decrement(v as ClearStatus) }
              >
                <Clear status={ props.result[v] ?? clearStatus.NOPLAY } />
              </Barrel>
            </div>
          ) : (
            <div
              key={ v.toString() }
              className="w-full text-center"
              onMouseEnter={ () => changeMyHoverState(v, true) }
            >
              <Clear status={ props.result[v] ?? clearStatus.NOPLAY } />
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
    result: ClearStatus[]
    filter: Difficulty[]
    level: number[]
    increment: (c: ClearStatus) => void
    decrement: (c: ClearStatus) => void
  }
