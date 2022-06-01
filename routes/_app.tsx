import { Head } from "aleph/react"
import { Header } from "../components/header.tsx"
import { Navigation } from "../components/navigation.tsx"

const App: React.FC<Props> = props => {
  return (
    <div className="bg-slate-800 text-slate-400">
      <Head>
        <title>プロセカの記録帳</title>
      </Head>
      <div className="sticky top-0 w-full flex-none border-b border-slate-500/40">
        <div className="max-w-[100em] px-10 py-3 mx-auto">
          <Header />
        </div>
      </div>
      <div className="max-w-[100em] mx-auto py-8">
        <Navigation className="w-[13em] fixed justify-items-center border-r-2 border-slate-400/20 ml-5" />
        <div className="ml-5 pl-[13em] grid w-auto justify-center">
          { props.children }
        </div>
      </div>
    </div>
  );
}
type Props = {
    children: React.ReactNode
}

export default App