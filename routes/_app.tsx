import { useState, useEffect } from "react"
import { useRouter } from "aleph/react"
import { Head } from "aleph/react"
import { Header } from "~/components/organisms/Header.tsx"
import { Footer } from "~/components/organisms/Footer.tsx"
import { Navigation } from "~/components/organisms/Navigation.tsx"
import { useTheme, ThemeCtx } from "~/hooks/useTheme.tsx"
import { useLogin } from "~/hooks/useLogin.ts"

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
              { !isLogin ? (
                <>
                  <div className="sticky top-0 w-full flex-none border-b border-slate-500/40">
                    <div className="max-w-[100em] px-10 py-3 mx-auto">
                      <Header />
                    </div>
                  </div>
                  <div className="max-w-[90em] mx-auto py-8">
                    <div
                      className="
                        fixed
                        box-border
                        right-[max(0px,calc(50%-45rem))]
                        w-[17em]
                        min-h-screen
                        pl-10 py-5
                        justify-center
                        border-l-2 border-slate-400/20
                      "
                    >
                      <Navigation />
                    </div>
                    <div className="mr-[20em] px-5 items-center">
                      <div className="mx-5">
                        { props.children }
                      </div>
                      <div
                        className="
                          border-t border-slate-300/20
                          mt-10 pt-15 pb-7
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
                      mt-6 pt-15 pb-10
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