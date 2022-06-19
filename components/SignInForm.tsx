import { Link } from "aleph/react"
import { Button } from "../components/Button.tsx"
import { useInput } from "../hooks/useInput.ts"
import { Input } from "./Input.tsx"

export const SignInForm = () => {
  const [ _loginID, setLoginID ] = useInput("")
  const [ _password, setPassword ] = useInput("")

  return (
    <div className="flex flex-col gap-y-7">
      <Input
        id="loginId"
        labelName="login ID"
        type="text"
        onChange={ setLoginID }
        placeholder="please input"
      />
      <Input
        id="password"
        labelName="password"
        type="password"
        onChange={ setPassword }
      />
      <Link to="/records" className="mt-3">
        <Button
          className="
            w-full
            text-white-200
            bg-blue-600
            hover:bg-blue-700
          "
        >
          sign in
        </Button>
      </Link>
    </div>
  )
}