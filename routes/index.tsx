import { useState, useEffect } from "react"
import { ThemeCtx } from "../hooks/useTheme.tsx"
import { SignInForm } from "../components/SignInForm.tsx"
import { SignUpForm } from "../components/SignUpForm.tsx"
import { Toggle, ToggleStyle } from "../components/Toggle.tsx"
import { GithubIcon } from "../components/GithubIcon.tsx"
import { useDelayCallback } from "../hooks/useDelayCallback.ts"

const Index: React.FC = () => {
  const list = [
    'jacket_001.png',
    'jacket_002.png',
    'jacket_003.png',
    'jacket_004.png',
    'jacket_005.png',
    'jacket_006.png',
    'jacket_007.png',
    'jacket_008.png',
    'jacket_009.png',
    'jacket_010.png',
    'jacket_011.png',
    'jacket_012.png',
    'jacket_013.png',
    'jacket_014.png',
    'jacket_015.png',
    'jacket_016.png',
  ]
  const [ my, setMy ] = useState(list[0])
  const { start } = useDelayCallback(3000, () => setMy(list[Math.floor(Math.random() * list.length)]), true)
  useEffect(() => start(), [])

  return (
    <ThemeCtx.Consumer>
      { ({ darkMode, switchMode }) => (
        <div className="flex min-h-[83vh] w-4/5 justify-around place-items-center">
          <div>
            <div className="flex gap-x-4">
              { "プロセカの".split("").map((s, i) => (
                <h1 key={ i.toString() }>
                  <span className={ "text-6xl" + (i == 0 ? " text-cyan-400" : darkMode ? " text-slate-300" : " text-slate-600") }>
                    { s }
                  </span>
                </h1>
              )) }
            </div>
            <div className="flex gap-x-4 flex-row-reverse pr-10">
              { "記録帳".split("").reverse().map((s, i) => (
                <h1 key={ i.toString() }>
                  <span className={ "text-6xl" + (i == 2 ? " text-pink-500/90" : darkMode ? " text-slate-300" : " text-slate-600") }>
                    { s }
                  </span>
                </h1>
              )) }
            </div>
            <div className="flex items-center overflow-hidden bg-slate-400 w-[384px] h-[256px] rounded-lg">
              <img className="w-[120%] fade" src={ `assets/${my}` } key={ Math.random() } />
            </div>
            <div className="flex flex-row-reverse mt-5 gap-x-9">
              <GithubIcon />
              <Toggle mode={ !darkMode } style={ ToggleStyle.THEME } role={ switchMode } />
            </div>
          </div>
          <div className="p-7 m-5 rounded-2xl min-w-[23.0rem]">
            <SignInForm />
          </div>
        </div>
      )}
    </ThemeCtx.Consumer>
  )
}

export default Index