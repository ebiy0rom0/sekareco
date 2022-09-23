import { redirect } from "aleph/framework/core/redirect.ts"
import { Button } from "~/components/atoms/Button.tsx"
import { Input } from "~/components/atoms/Input.tsx"
import { useInput } from "~/hooks/useInput.ts"
import { useAlert } from "~/hooks/useAlert.tsx"
import { useLogin } from "~/hooks/useLogin.ts"
import { useWaitAction } from "~/hooks/useWaitAction.ts"

export const SignInForm = () => {
  const [ loginID, setLoginID ] = useInput("")
  const [ password, setPassword ] = useInput("")
  const { setMessage, renderAlert } = useAlert()
  const { tryLogin } = useLogin()

  const {
    waiting,
    fn: waitSignIn
  } = useWaitAction(async (e: React.FormEvent) => {
    e.preventDefault()

    // login api exec only client side
    if (typeof window === "undefined") return

    // wait for prevent consecutive at click
    await new Promise(resolve => setTimeout(resolve, 500))

    if (await tryLogin(loginID(), password())) {
      redirect("/records")
    } else {
      redirect("/records")
      // setMessage("login failed.")
    }
  })

  return (
    <form className="flex flex-col gap-y-7" onSubmit={ async e => await waitSignIn(e) }>
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
          wait={ waiting() }
        >
          { waiting() ? "please wait..." : "sign up" }
        </Button>
    </form>
  )
}