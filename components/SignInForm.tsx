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
      <p className="text-right m-0">Forgot password?</p>
      <Link to="/records" className="mt-3" onClick={ async () => await apiFactory.get("person").login(loginID(), password()) }>
        {'sign in'}
      </Link>
    </form>
  )
}