import { Link } from "aleph/react"
import { SignInForm } from "../components/SignInForm.tsx"
import { SignUpForm } from "../components/SignUpForm.tsx"
import { Tab } from "../components/Tab.tsx"
import { GithubIcon } from "../components/GithubIcon.tsx"
import { useLog } from "../hooks/useLog.tsx"

const Index: React.FC = () => {
  const { setLog, renderLog } = useLog()

  return (
    <div className="flex min-h-[83vh] w-4/5 justify-evenly place-items-center">
      <div>
        <div className="flex gap-x-4">
          { "プロセカの".split("").map(s => (
            <h1><span className="text-6xl">{ s }</span></h1>
          )) }
        </div>
        <div className="flex gap-x-4">
          { "記録帳".split("").map(s => (
            <h1><span className="text-6xl">{ s }</span></h1>
          )) }
        </div>
        <p>
          記録残せるよ
        </p>
        <img className="bg-slate-400 w-[384px] h-[256px] rounded-lg" />
        <div className="flex flex-row-reverse mt-5">
          <GithubIcon />
        </div>
      </div>
      <div className="border-4 p-7 m-5 rounded-2xl min-w-[23.0rem] bg-slate-800/90">
        <Tab tabs={
          [
            {title: "sign in", key:"sign-in", content: (<SignInForm />)},
            {title: "sign up", key:"sign-up", content: (<SignUpForm />)},
          ]
        } />
      </div>
      { renderLog() }
    </div>
  )
}

export default Index