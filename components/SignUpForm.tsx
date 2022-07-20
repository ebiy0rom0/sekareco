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
         { waiting() ? (
          <>
            <svg className="align-middle animate-spin mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            please wait...
          </>
         ) : "sign up"  }
      </Button>
    </form>
  )
})