import { Link } from "aleph/react"
import { Button } from "../components/Button.tsx"
import { useInput } from "../hooks/useInput.ts"
import { Input } from "./Input.tsx"
import { apiFactory } from "../api/apiFactory.ts"

export const SignInForm = () => {
  const [ loginID, setLoginID ] = useInput("")
  const [ password, setPassword ] = useInput("")

  return (
    <form className="flex flex-col gap-y-7">
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
      <Link to="/records" className="mt-5" onClick={ async () => await apiFactory.get("person").login(loginID(), password()) }>
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
      </Link>
    </form>
  )
}