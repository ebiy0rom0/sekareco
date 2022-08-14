import React, { useMemo } from "react"
import { useInput } from "../hooks/useInput.ts"
import { useWaitAction } from "../hooks/useWaitAction.ts"
import { Input } from "./Input.tsx"
import { Button } from "../components/Button.tsx"
import { apiFactory } from "../api/apiFactory.ts"

export const SignUpForm = React.memo(() => {
  const [ loginID, setLoginID ] = useInput("")
  const [ password, setPassword ] = useInput("")
  const [ personName, setPersonName ] = useInput("")

  const {
    waiting,
    fn: waitRegistPerson
  } = useWaitAction(async () => await apiFactory.get("person").registPerson(loginID(), password(), personName()))

  return (
    <form className="flex flex-col gap-y-7">
      <Input
        id="loginId"
        labelName="ログインID"
        type="text"
        value={ loginID() }
        onChange={ setLoginID }
      />
      <Input
        id="name"
        labelName="ユーザー名"
        type="text"
        value={ personName() }
        onChange={ setPersonName }
      />
      <Input
        id="password"
        labelName="パスワード"
        type="password"
        value={ password() }
        onChange={ setPassword }
      />
      <Button
        className="
          w-full
          mt-5
          text-white-200
          bg-blue-600
          enabled:hover:bg-blue-500
          enabled:active:bg-blue-700
          disabled:bg-blue-500/90
          disabled:cursor-not-allowed
          disabled:opacity-85
        "
        onClick={ waitRegistPerson as () => Promise<void> }
        wait={ waiting() }
      >
        { waiting() ? "please wait..." : "sign up" }
      </Button>
    </form>
  )
})