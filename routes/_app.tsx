import { useState, useEffect } from "react"
import { useRouter } from "aleph/react"
import { Head } from "aleph/react"
import { Header } from "../components/Header.tsx"
import { Footer } from "../components/Footer.tsx"
import { Navigation } from "../components/Navigation.tsx"
import { useTheme, ThemeCtx } from "./../hooks/useTheme.tsx"
import { useLogin } from "./../hooks/useLogin.ts"

const MyApp: React.FC<Props> = props => {
  // when screen transitions, update login status
  const [ reloadKey, setReloadKey ] = useState(0)
  useEffect(() => {
    setReloadKey(reloadKey + 1)
  }, [useRouter().url])

  const { isLogin } = useLogin(reloadKey)
  const ThemeProvider = useTheme()

  return (
    <ThemeProvider>
      <ThemeCtx.Consumer>
        { ({ darkMode }) => (
          <>
            <Head>
              <title>プロセカの記録帳</title>
            </Head>
            <div className={ (darkMode ? "bg-slate-800 text-slate-400" : "bg-slate-100 text-slate-800") }>
              { isLogin ? (
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
              ) : (
                <div className="max-w-[100em] mx-auto w-4/5 py-8 flex flex-col items-center">
                  <div className="flex min-h-[80vh] justify-around place-items-center">
                    { props.children }
                  </div>
                  <div
                    className="
                      border-t border-slate-300/20
                      mt-10 pt-15 pb-6
                      min-w-full
                    "
                  >
                    <Footer />
                  </div>
                </div>
              )}
            </div>
          </>
        )}
      </ThemeCtx.Consumer>
    </ThemeProvider>
  )
}

type Props = {
  children: React.ReactNode
}

export default MyApp