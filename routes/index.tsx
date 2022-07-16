import { useState } from "react"
import { ThemeCtx } from "../hooks/useTheme.tsx"
import { SignInForm } from "../components/SignInForm.tsx"
import { SignUpForm } from "../components/SignUpForm.tsx"
import { Tab } from "../components/Tab.tsx"
import { Toggle, ToggleStyle } from "../components/Toggle.tsx"
import { GithubIcon } from "../components/GithubIcon.tsx"
import { useLog } from "../hooks/useLog.tsx"

const Index: React.FC = () => {
  const { setLog, renderLog } = useLog()
  const [ mode, setMode ] = useState<boolean>(true)

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
            <img className="bg-slate-400 w-[384px] h-[256px] rounded-lg" />
            <div className="flex flex-row-reverse mt-5 gap-x-9">
              <GithubIcon />
              <Toggle mode={ !darkMode } style={ ToggleStyle.THEME } role={ switchMode } />
            </div>
          </div>
          <div className="p-7 m-5 rounded-2xl min-w-[23.0rem]">
            <SignUpForm />
          </div>
          { renderLog() }
        </div>
      )}
    </ThemeCtx.Consumer>
  )
}

export default Index