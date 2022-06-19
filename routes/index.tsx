import { Link } from "aleph/react"
import { SignInForm } from "../components/SignInForm.tsx"
import { SignUpForm } from "../components/SignUpForm.tsx"
import { Tab } from "../components/Tab.tsx"
import { apiFactory } from "../api/apiFactory.ts"
import { useInput } from "../hooks/useInput.ts"
import { useLog } from "../hooks/useLog.tsx"
import { useDelayCallback } from "../hooks/useDelayCallback.ts"

const Index: React.FC = () => {
  const { setLog, renderLog } = useLog()

  return (
    <div className="flex flex-row min-h-[75vh] w-4/5 justify-center place-items-center">
      <div className="flex-1">
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
      </div>
      <div className="border-4 p-6 m-5 rounded-2xl flex-1 bg-slate-800/90">
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