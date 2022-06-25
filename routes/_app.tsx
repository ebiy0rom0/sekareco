import { useState, createContext } from "react"
import { Head } from "aleph/react"
import { Header } from "../components/Header.tsx"
import { Footer } from "../components/Footer.tsx"
import { Navigation } from "../components/Navigation.tsx"
import { useLogin } from "./../hooks/useLogin.ts"

export const theme = createContext<Theme>({
  darkMode: false,
  switchMode: () => undefined
})

const App: React.FC<Props> = props => {
  const { isLogin } = useLogin()
  const [ dark, setDark ] = useState(false)
  const context: Theme = {
    darkMode: dark,
    switchMode: () => setDark(!dark)
  }

  return (
    <theme.Provider value={ context }>
      <Head>
        <title>プロセカの記録帳</title>
      </Head>
      <div className={ (context.darkMode ? "bg-slate-800 text-slate-400" : "bg-gray-200 text-slate-800") + " min-h-screen" }>
        <button onClick={ context.switchMode }>{ context.darkMode ? 'light' : 'dark' }</button>
        { true ? (
          <div className="max-w-[100em] mx-auto py-8 flex flex-col items-center">
            { props.children }
            <div
              className="
                border-t border-slate-300/20
                mt-10 pt-15 pb-6
                w-4/5
              "
            >
              <Footer />
            </div>
          </div>
        ) : (
          <>
            <div className="sticky top-0 w-full flex-none border-b border-slate-500/40">
              <div className="max-w-[100em] px-10 py-3 mx-auto">
                <Header />
              </div>
            </div>
            <div className="max-w-[100em] mx-auto py-8">
              <Navigation
                className="
                  fixed
                  box-border
                  w-[13em]
                  min-h-screen
                  px-6 py-5
                  justify-center
                  border-r-2 border-slate-400/20
                "
              />
              <div className="ml-5 pl-[13em] flex flex-col items-center">
                { props.children }
                <div
                  className="
                    border-t border-slate-300/20
                    mt-10 pt-15 pb-7
                    w-4/5
                  "
                >
                  <Footer />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </theme.Provider>
  )
}
type Props = {
  children: React.ReactNode
}

type Theme = {
  darkMode: boolean
  switchMode: () => void
}

export default App