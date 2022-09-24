import { useState } from "react"
import { ThemeCtx } from "~/hooks/useTheme.tsx"
import { difficulty, Difficulty, clearStatus, ClearStatus } from "~/types/index.ts"
import { Barrel } from "~/components/atoms/Barrel.tsx"
import { Clear } from "~/components/atoms/Clear.tsx"
import { Difficulty as DiffComponent } from "~/components/atoms/Difficulty.tsx"
import { Music } from "~/components/atoms/Music.tsx"

export const MyRecord = (props: Props) => {
  const [ isHovers, setHovers ] = useState(new Array<boolean>(Object.keys(difficulty).length).fill(false))
  const changeMyHoverState = (difficulty: Difficulty, isHover: boolean) => {
    const copyHovers = [...isHovers]
    copyHovers[difficulty] = isHover
    setHovers(copyHovers)
  }

  return (
    <ThemeCtx.Consumer>
      { ({ darkMode }) => (
        <div
          className={`
            flex mt-3 rounded
            ${ darkMode ?
              "bg-slate-700/80 \
              hover:bg-slate-600/80 \
              shadow-slate-400/30 shadow-lg"
            :
              "bg-slate-300/60 \
              hover:bg-slate-400/40 \
              shadow-lg"
            }
          `}
        >
          <div className="music__master flex-none w-[18em] border-r">
            <Music title={ props.title } url={ props.url } />
          </div>
          <div className="music__record w-full flex flex-col py-2 px-3">
            <div className="difficulty grid grid-cols-5 justify-items-center">
              { Object.values(props.filter).map(v => (
                <DiffComponent
                  key={ v.toString() }
                  difficulty={ v }
                  level={ props.level[v] }
                />
              )) }
            </div>
            <div
              className="record grid grid-cols-5 mt-1 justify-items-center"
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
                  className="text-center h-[20px]"
                  onMouseEnter={ () => changeMyHoverState(v, true) }
                >
                  <Clear status={ props.result[v] ?? clearStatus.NOPLAY } />
                </div>
              ))}
            </div>
          </div>
        </div>
      ) }
    </ThemeCtx.Consumer>
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
