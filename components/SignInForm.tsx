import { redirect } from "aleph/framework/core/redirect.ts"
import { Button } from "../components/Button.tsx"
import { useInput } from "../hooks/useInput.ts"
import { useAlert } from "../hooks/useAlert.tsx"
import { useLogin } from "../hooks/useLogin.ts"
import { Input } from "./Input.tsx"
import { apiFactory } from "../api/apiFactory.ts"

export const SignInForm = () => {
  const [ loginID, setLoginID ] = useInput("")
  const [ password, setPassword ] = useInput("")
  const { setMessage, renderAlert } = useAlert()
  const { isLogin, tryLogin } = useLogin()

  const loginApi = async (e: React.FormEvent) => {
    e.preventDefault()

    // login api exec only client side
    if (typeof window === "undefined") return

    await tryLogin(loginID(), password())
    if (isLogin()) {
      redirect("/records")
    } else {
      setMessage("login failed. invalid loginID or password.")
    }
  }

  return (
    <form className="flex flex-col gap-y-7" onSubmit={ e => loginApi(e) }>
      { renderAlert() }
      <Input
        id="loginId"
        labelName="login ID"
        type="text"
        onChange={ setLoginID }
      />
      <Input
        id="password"
        labelName="password"
        type="password"
        onChange={ setPassword }
      />
      <p className="text-right m-0 -mt-6">Forgot password?</p>
        <Button
          className="
            w-full
            text-white-200
            bg-blue-600
            enabled:hover:bg-blue-500
            enabled:active:bg-blue-700
            disabled:bg-blue-500/90
            disabled:cursor-not-allowed
            disabled:opacity-85
          "
        >
          {'sign in'}
        </Button>
    </form>
  )
}