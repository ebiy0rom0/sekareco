import { Head } from "aleph/react"
import { Header } from "../components/Header.tsx"
import { Footer } from "../components/Footer.tsx"
import { Navigation } from "../components/Navigation.tsx"
import { useLogin } from "./../hooks/useLogin.ts"

const App: React.FC<Props> = props => {
  const { isLogin } = useLogin()

  return (
    <div className="min-h-screen bg-slate-800 text-slate-400">
      <Head>
        <title>プロセカの記録帳</title>
      </Head>
      { true ? (
        <div className="max-w-[100em] mx-auto py-8 flex flex-col items-center">
          { props.children }
          <div
            className="
              border-t border-slate-300/20
              mt-10 pt-15 pb-7
              w-full
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
                  w-full
                "
              >
                <Footer />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
type Props = {
  children: React.ReactNode
}

export default App