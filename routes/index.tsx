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
    <div className="flex flex-row w-full">
      <div className="basis-3/6">
        <h1>
          プロセカの記録帳
        </h1>
        <p>
          記録残せるよ
        </p>
      </div>
      <div className="border-5 p-6 m-5 rounded-2xl w-full">
        <Tab tabs={
          [
            {title: "サインイン", key:"sign-in", content: (<SignInForm />)},
            {title: "サインアップ", key:"sign-up", content: (<SignUpForm />)},
          ]
        } />
      </div>
      { renderLog() }
    </div>
  )
}

export default Index